import {
    ArrowBigUp,
    Calendar,
    EllipsisVertical,
    MessageSquare,
    Paperclip,
} from 'lucide-react';
import Image from 'next/image';
import { format } from 'date-fns';
import { ITask } from '@/models/Board';

export default function TaskCard({ taskData }: { taskData: ITask }) {
    return (
        <div className="card-compact card-bordered bg-gray-100 shadow-sm  rounded-lg ">
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <div className="badge badge-secondary">
                        {taskData.topic}
                    </div>
                    <div className="flex gap-1">
                        <button>
                            <EllipsisVertical className="size-4" />
                        </button>
                    </div>
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
                <div className="text-xs gap-2 flex justify-between ml-2">
                    <div className="flex items-center">
                        {[1, 2, 3].map((i) => (
                            <Image
                                alt="pic"
                                key={i}
                                src="/icon.png"
                                width={25}
                                height={25}
                                className="rounded-full -ml-2 border-primary"
                            />
                        ))}
                    </div>
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
