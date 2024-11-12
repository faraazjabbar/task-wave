import { IColumn } from '@/models/Board';
import ColumnView from './ColumnView';

export default async function KanbanView({
    columnsData,
}: {
    columnsData: IColumn[];
}) {
    return (
        <div className="h-screen p-8">
            <div className="grid grid-cols-4 gap-4">
                {columnsData.map((columnData) => (
                    <ColumnView
                        key={columnData.name}
                        columnData={columnData}
                    ></ColumnView>
                ))}
            </div>
        </div>
    );
}
