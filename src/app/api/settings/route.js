import dbConnect from '@/lib/db';
import Settings from '@/lib/models/Settings';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();
    // Return existing settings, or a default fallback if none exist (without writing to DB)
    const settings = await Settings.findOne() || {
      rate: 102,
      withdrawMin: 50,
      depositMin: 100,
      wazirxAvg: 90.69,
      wazirxMin: 90.69,
      wazirxMax: 90.76,
      binanceAvg: 94.34,
      binanceMin: 94.99,
      binanceMax: 96.2
    };

    return NextResponse.json({ settings });
  } catch (err) {
    console.error('Error fetching settings:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
