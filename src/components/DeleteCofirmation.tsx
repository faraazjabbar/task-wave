'use client';

import { deleteTask } from '@/actions/data';

const DeleteConfirmation = ({
    boardId,
    closeModal,
    taskId,
}: {
    boardId: string;
    closeModal?: () => void;
    taskId: string;
}) => {
    return (
        <form action={deleteTask} onSubmit={closeModal}>
            <h3 className="font-bold text-lg">
                Are you sure you want to delete this task?
            </h3>
            <input name="taskId" value={taskId} hidden />
            <input name="boardId" value={boardId} hidden />
            <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-error">Delete</button>
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

export default DeleteConfirmation;
