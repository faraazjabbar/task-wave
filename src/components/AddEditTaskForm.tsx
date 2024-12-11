'use client';

import { addTask, editTask } from '@/actions/data';
import { useForm } from 'react-hook-form';
import { Types } from 'mongoose';
import cn from 'classnames';

const AddEditTaskForm = ({
    boardId,
    columnId,
    closeModal = () => {},
    editTaskData,
}: {
    boardId: Types.ObjectId;
    columnId?: Types.ObjectId;
    closeModal?: () => void;
    editTaskData?: {
        id: Types.ObjectId;
        title: string;
        dueDate: string;
        description: string;
        severity: string;
    };
}) => {
    type AddEditFormValues = {
        id: Types.ObjectId;
        title: string;
        dueDate: string;
        description: string;
        severity: string;
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddEditFormValues>({ defaultValues: editTaskData });

    const onSubmit = (data: AddEditFormValues) => {
        if (editTaskData) {
            editTask(data, boardId);
        } else if (columnId) {
            addTask(data, columnId, boardId);
        }
        closeModal();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {editTaskData ? (
                <h3 className="font-bold text-lg mb-6">Update Task</h3>
            ) : (
                <h3 className="font-bold text-lg mb-6">Add new task</h3>
            )}
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                >
                    Title
                </label>
                <input
                    {...register('title', { required: true })}
                    placeholder="Task Title"
                    className={cn('input input-bordered w-full', {
                        'input-error': errors.title,
                    })}
                />
            </div>

            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="description"
                >
                    Description
                </label>
                <textarea
                    {...register('description', { required: true })}
                    placeholder="Task Description"
                    className={cn('textarea textarea-bordered w-full', {
                        'textarea-error': errors.description,
                    })}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="dueDate"
                >
                    Due Date
                </label>
                <input
                    type="date"
                    className={cn('input input-bordered w-full', {
                        'input-error': errors.dueDate,
                    })}
                    {...register('dueDate', { required: true })}
                />
            </div>

            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="severity"
                >
                    Severity
                </label>
                <select
                    className="select select-bordered w-full"
                    id="severity"
                    {...register('severity', { required: true })}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                {editTaskData ? (
                    <button className="btn">Update</button>
                ) : (
                    <button className="btn">Submit</button>
                )}

                <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </form>
    );
};

export default AddEditTaskForm;
