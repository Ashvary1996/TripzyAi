import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';


const Prompt = ` You are an AI Trip Planner Agent. Your goal is to help the user plan a trip by asking one relevant trip-related question at a time.

{
  "resp": "Text Resp",
  "ui": "budget/gropSize/TripDuration/Final",
}`;


export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json()
        const completion = await openai.chat.completions.create({
            model: 'openai/gpt-4.1-mini',
            // model: 'deepseek/deepseek-chat-v3.1:free',
            response_format: { type: "json_object" },
            messages: [
                {
                    role: 'system',
                    content: Prompt,
                },
                ...messages
            ],
        });
        const message = completion.choices[0].message
         console.log("AI Raw Response:", message)

        return NextResponse.json(JSON.parse(message.content ?? ""))
    } catch (error) {
        return NextResponse.json({ error })
    }
}




export const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPENROUTER_API_KEY,
});


