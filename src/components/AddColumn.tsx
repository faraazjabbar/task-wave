'use client';

import { addBoard, addColumn } from '@/actions/data';
import { useForm, SubmitHandler } from 'react-hook-form';
import cn from 'classnames';

const AddColumn = ({
    boardId,
    closeModal = () => {},
}: {
    boardId: string;
    closeModal?: () => void;
}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit: SubmitHandler<any> = (data) => {
        // console.log(data);
        addColumn(data, boardId);
        closeModal();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg">Add new column</h3>
            <input
                {...register('columnName', { required: true })}
                placeholder="Column Name"
                className={cn('input input-bordered w-full max-w-xs', {
                    'input-error': errors.columnName,
                })}
            />
            {errors.columnName && (
                <p className="mt-1 text-error">This field is required</p>
            )}

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

export default AddColumn;
