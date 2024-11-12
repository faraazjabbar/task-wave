import KanbanView from '@/components/KanbanView';
import { Board, IBoard } from './models/Board';
import BoardInfoBar from '@/components/BoardInfoBar';

export default async function Home() {
    const boardData: IBoard = await Board.findById(
        '64b7f0f2f1a4e8b1d8f1e8b2'
    ).populate({ path: 'columns', populate: { path: 'tasks' } });
    console.log(boardData);
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <BoardInfoBar boardInfo={boardData}></BoardInfoBar>
                {boardData.columns && (
                    <KanbanView columnsData={boardData.columns}></KanbanView>
                )}
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li>
                        <a>Sidebar Item 1</a>
                    </li>
                    <li>
                        <a>Sidebar Item 2</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
