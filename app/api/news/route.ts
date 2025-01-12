import { NextResponse } from 'next/server';

const NEWS_API_KEY = '082a6feebdbe4b80a6f8662ba6be6ffe';

export async function GET(request: Request) {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?language=en&apiKey=${NEWS_API_KEY}`);
    const data = await response.json();
    return NextResponse.json(data);
}
