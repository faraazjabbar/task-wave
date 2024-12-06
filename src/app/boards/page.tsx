import { getAllBoards } from '@/lib/data';
import { IBoard } from '@/models/Board';
import Link from 'next/link';

export default async function Boards() {
    const boardsData: IBoard[] = await getAllBoards();
    return (
        <div className="prose px-8">
            <h2 className="">Your boards</h2>
            <button>Add new board</button>

            <div className="flex gap-4">
                {boardsData.map((boardsData) => (
                    <Link
                        href={'boards/' + boardsData.id}
                        className="card bg-base-100 w-96 shadow-xl cursor-pointer"
                    >
                        <div className="card-body">
                            <h3 className="card-title">{boardsData.name}</h3>
                        </div>
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                            />
                        </figure>
                    </Link>
                ))}
            </div>
        </div>
    );
}
