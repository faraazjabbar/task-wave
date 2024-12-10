'use client';

import { addBoard, addColumn, addTask, editTask } from '@/actions/data';
import { useForm, SubmitHandler } from 'react-hook-form';
import cn from 'classnames';
import { useEffect } from 'react';

const AddTask = ({
    boardId,
    columnId,
    closeModal = () => {},
    editTaskData,
}: {
    boardId: string;
    columnId: string;
    closeModal?: () => void;
    editTaskData?: any;
}) => {
    useEffect(() => {
        console.log(editTaskData);
        // reset(editTask);
    }, []);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({ defaultValues: editTaskData });
    const onSubmit: SubmitHandler<any> = (data) => {
        console.log(data);
        if (editTaskData) {
            editTask(data, boardId);
        } else {
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

//     return (
//         <div className="max-w-md mx-auto mt-10">
//             <form
//                 className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//                 onSubmit={handleSubmit}
//             >
//                 <div className="mb-4">
//                     <label
//                         className="block text-gray-700 text-sm font-bold mb-2"
//                         htmlFor="title"
//                     >
//                         Title
//                     </label>
//                     <input
//                         className="input input-bordered w-full"
//                         id="title"
//                         type="text"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         placeholder="Task Title"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label
//                         className="block text-gray-700 text-sm font-bold mb-2"
//                         htmlFor="description"
//                     >
//                         Description
//                     </label>
//                     <textarea
//                         className="textarea textarea-bordered w-full"
//                         id="description"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         placeholder="Task Description"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label
//                         className="block text-gray-700 text-sm font-bold mb-2"
//                         htmlFor="dueDate"
//                     >
//                         Due Date
//                     </label>
//                     <input
//                         className="input input-bordered w-full"
//                         id="dueDate"
//                         type="date"
//                         value={dueDate}
//                         onChange={(e) => setDueDate(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label
//                         className="block text-gray-700 text-sm font-bold mb-2"
//                         htmlFor="severity"
//                     >
//                         Severity
//                     </label>
//                     <select
//                         className="select select-bordered w-full"
//                         id="severity"
//                         value={severity}
//                         onChange={(e) => setSeverity(e.target.value)}
//                         required
//                     >
//                         <option value="low">Low</option>
//                         <option value="medium">Medium</option>
//                         <option value="high">High</option>
//                     </select>
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <button className="btn btn-primary" type="submit">
//                         Add Task
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

export default AddTask;
