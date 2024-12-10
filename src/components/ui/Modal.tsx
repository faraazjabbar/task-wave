'use client';

import React, { useRef } from 'react';

export default function Modal({ buttonName, children }) {
    const modalRef = useRef<HTMLDialogElement>(null);
    // const showModal = () => {
    //     (
    //         document.getElementById('my_modal_1') as HTMLDialogElement
    //     ).showModal();
    // };
    // const closeModal = () => {
    //     (document.getElementById('my_modal_1') as HTMLDialogElement).close();
    // };
    const showModal = () => {
        modalRef.current?.showModal();
    };
    const closeModal = () => {
        modalRef.current?.close();
    };
    children = React.Children.only(children);
    children = React.cloneElement(children, { closeModal });
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={showModal}>
                {buttonName}
            </button>
            <dialog ref={modalRef} className="modal">
                <div className="modal-box">{children}</div>
            </dialog>
        </div>
    );
}
