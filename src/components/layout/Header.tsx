import { auth, signOut } from '@/auth';
import Image from 'next/image';

export default async function Header() {
    const session = await auth();
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    Task Wave - {session?.user?.name}
                </a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            {session?.user?.image && (
                                <Image
                                    alt="Profile Pic"
                                    src={session.user.image}
                                    width={20}
                                    height={20}
                                />
                            )}
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <form
                                action={async () => {
                                    'use server';
                                    await signOut();
                                }}
                            >
                                <button type="submit">Log Out</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
