'use server';

import { auth } from '@/auth';
import { Board, ITask } from '@/models/Board';
import Column from '@/models/Column';
import Task from '@/models/Task';
import { revalidatePath } from 'next/cache';

export async function addBoard(boardData) {
    const session = await auth();
    console.log(session?.user);
    await Board.create({
        owner: session?.user?.id,
        name: boardData.get('boardName') ?? 'Default',
        columns: [],
    });
    revalidatePath('/boards');
}
export async function addColumn(columnData, boardId) {
    console.log(columnData, boardId);
    await Column.create({
        name: columnData.columnName ?? 'Default',
        tasks: [],
        boardId,
    });
    revalidatePath('/boards/' + boardId);
}
export async function addTask(taskData, columnId, boardId) {
    console.log(taskData);
    await Task.create<ITask>({
        ...taskData,
        columnId,
        comments: [],
    });
    revalidatePath('/boards/' + boardId);
}
export async function editTask(taskData, boardId) {
    console.log(taskData);
    await Task.findByIdAndUpdate(taskData.id, {
        title: taskData.title,
        description: taskData.description,
        dueDate: taskData.dueDate,
        severity: taskData.severity,
    });
    revalidatePath('/boards/' + boardId);
}
export async function deleteTask(formData) {
    console.log(formData);
    const taskId = formData.get('taskId');
    const boardId = formData.get('boardId');
    await Task.findByIdAndDelete(taskId);
    revalidatePath('/boards/' + boardId);
}
