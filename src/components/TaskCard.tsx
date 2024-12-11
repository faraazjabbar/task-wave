import {
    ArrowBigUp,
    Calendar,
    EllipsisVertical,
    MessageSquare,
    Paperclip,
    Pencil,
    Trash,
    Trash2,
} from 'lucide-react';
import Image from 'next/image';
import { format } from 'date-fns';
import { ITask } from '@/models/Board';
import Modal from './ui/Modal';
import AddTask from './AddEditTask';
import TaskCardOptions from './TaskCardOptions';

export default function TaskCard({
    taskData,
    boardId,
}: {
    taskData: ITask;
    boardId: string;
}) {
    return (
        <div className="card-compact card-bordered shadow-sm rounded-lg ">
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <div className="badge badge-secondary">
                        {taskData.topic}
                    </div>
                    <TaskCardOptions
                        taskData={{
                            id: taskData.id,
                            title: taskData.title,
                            dueDate: format(taskData.dueDate, 'yyyy-MM-dd'),
                            description: taskData.description,
                            severity: taskData.severity,
                        }}
                        boardId={boardId}
                    />
                </div>
                <h4 className="font-semibold flex items-center gap-2">
                    {taskData.severity === 'high' && (
                        <ArrowBigUp className="size-4" color="red" fill="red" />
                    )}
                    {taskData.severity === 'medium' && (
                        <ArrowBigUp
                            className="size-4"
                            color="blue"
                            fill="blue"
                        />
                    )}
                    {taskData.severity === 'low' && (
                        <ArrowBigUp
                            className="size-4"
                            color="green"
                            fill="green"
                        />
                    )}
                    {taskData.description}
                </h4>
                <div className="text-xs flex gap-2 items-center">
                    <Calendar className="size-3" />
                    <span>{format(taskData.dueDate, 'do MMM yyyy')}</span>
                </div>
                <div className="text-xs flex justify-between">
                    <Image
                        alt="pic"
                        src="/icon.png"
                        width={25}
                        height={25}
                        className="rounded-full border-primary"
                    />
                    <div className="flex gap-2 items-center">
                        <div className="flex gap-1 items-center">
                            <MessageSquare className="size-3" /> 3
                        </div>
                        <div className="flex gap-1 items-center">
                            <Paperclip className="size-3" /> 3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
