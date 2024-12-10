'use client';

import { addBoard } from '@/actions/data';

const AddBoard = ({ closeModal }: { closeModal?: () => void }) => {
    return (
        <form action={addBoard} onSubmit={closeModal}>
            <h3 className="font-bold text-lg">Add new board</h3>
            <input
                name="boardName"
                type="text"
                placeholder="Board Name"
                className="input input-bordered w-full max-w-xs"
            />
            <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Submit</button>
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

export default AddBoard;
