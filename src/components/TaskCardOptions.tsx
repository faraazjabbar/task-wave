'use client';

import { EllipsisVertical, Pencil, Trash2 } from 'lucide-react';
import React, { useRef, useState } from 'react';
import AddTask from './AddTask';

const TaskCardOptions = ({ taskData }) => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const dropdownRef = useRef<HTMLUListElement>(null);

    // const showModal = () => {
    //     (
    //         document.getElementById('my_modal_1') as HTMLDialogElement
    //     ).showModal();
    // };
    // const closeModal = () => {
    //     (document.getElementById('my_modal_1') as HTMLDialogElement).close();
    // };
    const showModal = () => {
        dropdownRef.current?.blur();
        modalRef.current?.showModal();
    };
    const closeModal = () => {
        modalRef.current?.close();
    };

    return (
        <>
            <dialog ref={modalRef} className="modal">
                <div className="modal-box">
                    {JSON.stringify(taskData)}
                    {taskData && (
                        <AddTask
                            boardId=""
                            columnId=""
                            closeModal={closeModal}
                            editTaskData={taskData}
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
                        <a className="text-error">
                            <Trash2 className="size-4" /> Delete
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default TaskCardOptions;
