import dbConnect from '@/lib/mongodb';

export async function register() {
    if (process.env.NEXT_RUNTIME !== 'nodejs') return;
    await dbConnect();
}
