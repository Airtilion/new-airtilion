import connectToDB from "@lib/db";
import Vote from "@models/Vote";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) return NextResponse.json({ error: 'Brak slugu' }, { status: 400 });

    await connectToDB();
    const vote = await Vote.findOne({ slug });

    return NextResponse.json({
        yes: vote?.yes || 0,
        no: vote?.no || 0,
    });
}

export async function POST(request) {
    const { slug, vote } = await request.json();

    if (!slug || !['yes', 'no'].includes(vote)) {
        return NextResponse.json({ error: 'Nieprawidłowe dane' }, { status: 400 });
    };

    await connectToDB();

    const result = await Vote.findOneAndUpdate(
        { slug },
        { $inc: { [vote]: 1 } },
        { upsert: true, new: true }
    );

    return NextResponse.json({
        yes: result.yes,
        no: result.no,
    });
}