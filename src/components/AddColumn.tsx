'use client';

import { addColumn } from '@/actions/data';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Types } from 'mongoose';
import { cn } from '@/lib/utils';

const AddColumn = ({
    boardId,
    closeModal = () => {},
}: {
    boardId: Types.ObjectId;
    closeModal?: () => void;
}) => {
    type AddColumnFormValues = {
        name: string;
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddColumnFormValues>();
    const onSubmit = (data: AddColumnFormValues) => {
        addColumn(data, boardId);
        closeModal();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg">Add new column</h3>
            <input
                {...register('name', { required: true })}
                placeholder="Column Name"
                className={cn('input input-bordered w-full max-w-xs', {
                    'input-error': errors.name,
                })}
            />
            {errors.name && (
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
