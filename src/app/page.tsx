import KanbanView from '@/components/KanbanView';
import BoardInfoBar from '@/components/BoardInfoBar';
import { getBoardData } from '@/lib/data';
import { IBoard } from '@/models/Board';

export default async function Home() {
    // await dbConnect();
    const boardData: IBoard = await getBoardData('64b7f0f2f1a4e8b1d8f1e8b2');

    return (
        <>
            {boardData && (
                <>
                    <BoardInfoBar boardInfo={boardData}></BoardInfoBar>
                    {boardData.columns && (
                        <KanbanView
                            boardId={boardData.id}
                            columnsData={boardData.columns}
                        ></KanbanView>
                    )}
                </>
            )}
        </>
    );
}
