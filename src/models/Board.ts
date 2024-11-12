import mongoose, { Types } from 'mongoose';

const Schema = mongoose.Schema;

export interface IBoard {
    name: string;
    owner: Types.ObjectId;
    columns?: Types.Array<IColumn>;
}

const boardSchema = new Schema<IBoard>({
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    columns: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Column',
        },
    ],
});

export interface IColumn {
    name: string;
    boardId: Types.ObjectId;
    tasks?: Types.Array<ITask>;
}

const columnSchema = new Schema<IColumn>({
    name: {
        type: String,
        required: true,
    },
    boardId: {
        type: Schema.Types.ObjectId,
        ref: 'Board',
        required: true,
    },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Task',
        },
    ],
});

export interface ITask {
    title: string;
    description: string;
    dueDate: Date;
    topic: string;
    severity: string;
    comments: Types.Array<{
        userId: Types.ObjectId;
        comment: string;
        timestamp: Date;
    }>;
    columnId: Types.ObjectId;
}

const taskSchema = new Schema<ITask>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    dueDate: {
        type: Date,
    },
    topic: {
        type: String,
    },
    severity: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low',
    },
    comments: [
        {
            userId: {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
            comment: {
                type: String,
            },
            timestamp: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    columnId: {
        type: Schema.Types.ObjectId,
        ref: 'Column',
        required: true,
    },
});

export const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

export const Column =
    mongoose.models.Column || mongoose.model('Column', columnSchema);

export const Board =
    mongoose.models.Board || mongoose.model('Board', boardSchema);