import Image from 'next/image';
import { Plus } from 'lucide-react';
import { IBoard } from '@/models/Board';

export default function BoardInfoBar({
    boardInfo: { name },
}: {
    boardInfo: IBoard;
}) {
    return (
        <section className="px-8 py-4 bg-neutral">
            <div className="flex justify-between">
                <div className="flex gap-4 items-center text-neutral-content">
                    <Image
                        src="/icon.png"
                        width={100}
                        height={100}
                        alt="Icon"
                    />{' '}
                    <h2 className="font-bold text-xl ">{name}</h2>
                </div>
                <div className="flex gap-4 items-center ml-2">
                    <div className="flex items-center">
                        {[1, 2, 3].map((i) => (
                            <Image
                                alt="pic"
                                key={i}
                                src="/icon.png"
                                width={35}
                                height={35}
                                className="rounded-full -ml-2 border-primary"
                            />
                        ))}
                    </div>
                    <button className="btn">
                        {' '}
                        <Plus />
                        Add Member
                    </button>
                </div>
            </div>
            <div className="flex justify-end">
                <div role="tablist" className="tabs tabs-boxed">
                    <a role="tab" className="tab tab-active">
                        Kanban
                    </a>
                    <a role="tab" className="tab">
                        Table
                    </a>
                    <a role="tab" className="tab">
                        List
                    </a>
                </div>
            </div>
        </section>
    );
}
