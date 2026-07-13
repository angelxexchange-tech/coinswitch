import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Transaction from '@/lib/models/Transaction';
import { getCurrentUser } from '@/lib/auth';

export async function GET(req) {
  try {
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    const statements = await Transaction.find({ userId: user._id })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ statements });
  } catch (err) {
    console.error('Error fetching statements:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
