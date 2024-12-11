'use client';

import { deleteTask } from '@/actions/data';
import { Types } from 'mongoose';

const DeleteConfirmation = ({
    boardId,
    closeModal,
    taskId,
}: {
    boardId: Types.ObjectId;
    closeModal?: () => void;
    taskId: Types.ObjectId;
}) => {
    return (
        <form action={deleteTask} onSubmit={closeModal}>
            <h3 className="font-bold text-lg">
                Are you sure you want to delete this task?
            </h3>
            <input name="taskId" value={taskId.toString()} readOnly hidden />
            <input name="boardId" value={boardId.toString()} readOnly hidden />
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
