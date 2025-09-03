'use client'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import React, { useState } from 'react'
type Message = {
    role: string,
    content: string
}

function ChatBox() {
    const [messages, setMessages] = useState<Message[]>([]);

    const onSend = () => {
        console.log("clicked");
        

    };
    return (
        <div className='h-[80vh] flex flex-col'>
            {/* Display MEssages */}

            <section className='flex-1  overflow-y-auto p-4'>
                <div className='flex justify-end mt-2'>
                    <div className='max-w-lg bg-primary  text-white px-4 py-2 rounded-lg '>
                        User msg
                    </div>
                </div>
                <div className='flex justify-start mt-2' >
                    <div className='max-w-lg bg-gray-100  text-black px-4 py-2 rounded-lg '>
                        Ai Agent msg
                    </div>
                </div>

            </section>
            {/* {userinput} */}
            <section>
                {/* Input Box */}
                <div>
                    <div className="border rounded-2xl p-4 relative">
                        <Textarea
                            placeholder="Create a trip from Paris to New York"
                            className="w-full h-20 border-none focus-visible:ring-0 shadow-none resize-none"
                        />
                        <Button
                            size={"icon"}
                            onClick={() => onSend()}
                            className="bottom-3 right-3 absolute cursor-pointer"
                        >
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ChatBox