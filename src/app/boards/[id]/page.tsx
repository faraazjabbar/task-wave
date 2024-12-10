import KanbanView from '@/components/KanbanView';
import BoardInfoBar from '@/components/BoardInfoBar';
import { getBoardData } from '@/lib/data';
import { IBoard } from '@/models/Board';
import Link from 'next/link';

export default async function Board({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    // await dbConnect();
    const routeParams = await params;
    const boardId = routeParams.id;
    const boardData: IBoard = await getBoardData(boardId);
    console.log(boardData);
    return (
        <>
            <div className="breadcrumbs text-sm px-8">
                <ul>
                    <li>
                        <Link href={'/boards'}>Boards</Link>
                    </li>

                    <li className="font-bold">{boardData.name}</li>
                </ul>
            </div>
            {boardData && (
                <>
                    <BoardInfoBar boardInfo={boardData}></BoardInfoBar>
                    {boardData.columns && (
                        <KanbanView
                            columnsData={boardData.columns}
                            boardId={boardData.id}
                        ></KanbanView>
                    )}
                </>
            )}
        </>
    );
}
