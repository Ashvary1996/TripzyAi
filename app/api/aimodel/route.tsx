import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';
import PROMPT from "./prompt.js"
 
console.log('prompt',PROMPT);

export async function POST(req: NextRequest) {

    try {
        const { messages } = await req.json()
        const completion = await openai.chat.completions.create({
            model: 'openai/gpt-4.1/mini',
            messages: [
                {
                    role: 'system',
                    content: 'PROMPT',
                },
                ...messages
            ],
        });
        const message = completion.choices[0].message
        console.log(message);
        return NextResponse.json(JSON.parse(message.content ?? ""))
    } catch (error) {
        return NextResponse.json({ error })
    }
}




export const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPENROUTER_API_KEY,
    //   defaultHeaders: {
    //     'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
    //     'X-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
    //   },
});


