'use server';

import { auth } from '@/auth';
import { Board, ITask } from '@/models/Board';
import Column from '@/models/Column';
import Task from '@/models/Task';
import { Types } from 'mongoose';
import { revalidatePath } from 'next/cache';

export async function addBoard(boardData: FormData) {
    const session = await auth();
    await Board.create({
        owner: session?.user?.id,
        name: boardData.get('boardName') ?? 'Default',
        columns: [],
    });
    revalidatePath('/boards');
}
export async function addColumn(
    columnData: { name: string },
    boardId: Types.ObjectId
) {
    await Column.create({
        name: columnData.name ?? 'Default',
        tasks: [],
        boardId,
    });
    revalidatePath('/boards/' + boardId);
}
export async function addTask(
    taskData: {
        id: Types.ObjectId;
        title: string;
        dueDate: string;
        description: string;
        severity: string;
    },
    columnId: Types.ObjectId,
    boardId: Types.ObjectId
) {
    console.log(taskData);
    await Task.create<ITask>({
        ...taskData,
        columnId,
        comments: [],
    });
    revalidatePath('/boards/' + boardId);
}
export async function editTask(
    taskData: {
        id: Types.ObjectId;
        title: string;
        dueDate: string;
        description: string;
        severity: string;
    },
    boardId: Types.ObjectId
) {
    console.log(taskData);
    await Task.findByIdAndUpdate(taskData.id, {
        title: taskData.title,
        description: taskData.description,
        dueDate: taskData.dueDate,
        severity: taskData.severity,
    });
    revalidatePath('/boards/' + boardId);
}
export async function deleteTask(deleteFormData: FormData) {
    const taskId = deleteFormData.get('taskId');
    const boardId = deleteFormData.get('boardId');
    await Task.findByIdAndDelete(taskId);
    revalidatePath('/boards/' + boardId);
}
