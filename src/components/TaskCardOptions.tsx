'use client';

import { EllipsisVertical, Pencil, Trash2 } from 'lucide-react';
import React, { useRef, useState } from 'react';
import AddTask from './AddEditTask';
import DeleteConfirmation from './DeleteCofirmation';

const TaskCardOptions = ({ taskData, boardId }) => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const delModalRef = useRef<HTMLDialogElement>(null);
    const dropdownRef = useRef<HTMLUListElement>(null);

    const showModal = () => {
        dropdownRef.current?.blur();
        modalRef.current?.showModal();
    };
    const closeModal = () => {
        modalRef.current?.close();
    };
    const showDelModal = () => {
        dropdownRef.current?.blur();
        delModalRef.current?.showModal();
    };
    const closeDelModal = () => {
        delModalRef.current?.close();
    };
    return (
        <>
            <dialog ref={modalRef} className="modal">
                <div className="modal-box">
                    {JSON.stringify(taskData)}
                    {taskData && (
                        <AddTask
                            boardId={boardId}
                            columnId=""
                            closeModal={closeModal}
                            editTaskData={taskData}
                        />
                    )}
                </div>
            </dialog>
            <dialog ref={delModalRef} className="modal">
                <div className="modal-box">
                    {taskData && (
                        <DeleteConfirmation
                            boardId={boardId}
                            closeModal={closeDelModal}
                            taskId={taskData.id}
                        />
                    )}
                </div>
            </dialog>

            <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button">
                    <EllipsisVertical className="size-4" />
                </div>
                <ul
                    tabIndex={0}
                    ref={dropdownRef}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                    <li onClick={showModal}>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <a className="text-primary">
                            <Pencil className="size-4" /> Edit
                        </a>
                        {/* <a className="text-primary">
                <Pencil className="size-4" /> Edit
            </a> */}
                    </li>
                    <li>
                        <a onClick={showDelModal} className="text-error">
                            <Trash2 className="size-4" /> Delete
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default TaskCardOptions;
