import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Record } from '@/models/Record';


export async function POST(req) {
    try{
        await connectDB();
        const body = await req.json();
        const entry = await Record.create(body);
        return NextResponse.json({ success: true, entry });
    }catch(er){
    return NextResponse.json({message:er.message})
    }
}