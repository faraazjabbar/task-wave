import { getAllBoards } from '@/lib/data';
import { IBoard } from '@/models/Board';
import Link from 'next/link';
import Image from 'next/image';
import AddBoard from '@/components/AddBoard';
import Modal from '@/components/ui/Modal';

export default async function Boards() {
    const boardsData: IBoard[] = await getAllBoards();
    return (
        <div className="prose px-8">
            <h2 className="">Your boards</h2>
            {/* <AddBoard /> */}
            <Modal buttonName={'Add new Board'}>
                <AddBoard />
            </Modal>
            <div className="flex gap-4">
                {boardsData.map((boardsData) => (
                    <Link
                        key={boardsData.id}
                        href={'boards/' + boardsData.id}
                        className="card bg-base-100 w-96 shadow-xl cursor-pointer"
                    >
                        <div className="card-body">
                            <h3 className="card-title">{boardsData.name}</h3>
                        </div>
                        <figure>
                            <Image
                                width={200}
                                height={200}
                                src="/icon.png"
                                alt="Shoes"
                            />
                        </figure>
                    </Link>
                ))}
            </div>
        </div>
    );
}
