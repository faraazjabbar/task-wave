import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const taskSchema = new Schema({
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

export default mongoose.models.Task || mongoose.model('Task', taskSchema);
