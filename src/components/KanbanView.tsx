import { IColumn } from '@/models/Board';
import ColumnView from './ColumnView';
import Modal from './ui/Modal';
import AddColumn from './AddColumn';
import { Types } from 'mongoose';

export default async function KanbanView({
    columnsData,
    boardId,
}: {
    columnsData: IColumn[];
    boardId: Types.ObjectId;
}) {
    return (
        <div className="p-8 overflow-x-auto grid grid-flow-col auto-cols-[minmax(400px,_2fr)]	 gap-4">
            {columnsData.map((columnData) => (
                <ColumnView
                    key={columnData.id.toString()}
                    columnData={columnData}
                    boardId={boardId}
                ></ColumnView>
            ))}
            <Modal buttonName={'Add new Column'}>
                <AddColumn boardId={boardId} />
            </Modal>
        </div>
    );
}
