import { EllipsisVertical, Plus } from 'lucide-react';
import { IColumn } from '@/models/Board';
import TaskCard from './TaskCard';
import Modal from './ui/Modal';
import AddColumn from './AddColumn';
import AddEditTask from './AddEditTask';

export default function ColumnView({
    columnData,
    boardId,
}: {
    columnData: IColumn;
    boardId: string;
}) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
                <div className="bg-orange-400 rounded-full h-2 w-2"></div>
                <h3 className="font-bold">{columnData.name}</h3>
                {columnData.tasks && (
                    <div className="badge badge-ghost font-bold">
                        {columnData.tasks.length}
                    </div>
                )}
                <button className="ml-auto">
                    <EllipsisVertical className="size-5" />
                </button>
            </div>
            {/* <button className="btn btn-sm btn-outline btn-primary">
                <Plus className="size-4" /> Add Task
            </button> */}
            <Modal buttonName={'Add Task'}>
                <AddEditTask boardId={boardId} columnId={columnData.id} />
            </Modal>

            {columnData.tasks && (
                <div className="rounded-2xl flex flex-col gap-2">
                    {columnData.tasks.map((task) => (
                        <TaskCard
                            key={task.title}
                            taskData={task}
                            boardId={boardId}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
