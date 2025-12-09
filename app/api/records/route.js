import { NextResponse } from 'next/server';
import  {connectDB}  from '../../../lib/mongodb';
import { Record } from '../../../models/Record';


export async function GET() {
await connectDB();
const records = await Record.find().sort({ createdAt: -1 });
return NextResponse.json({ records });
}

export async function POST(req) {
    await connectDB();

  const { phone } = await req.json();
const records = await Record.findOne({phone});
return NextResponse.json({ records });
}