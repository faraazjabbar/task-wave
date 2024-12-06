import { Board } from '@/models/Board';

export const getAllBoards = () => {
    return Board.find();
};

export const getBoardData = (boardId: string) => {
    return Board.findById(boardId).populate({
        path: 'columns',
        populate: { path: 'tasks' },
    });
};
