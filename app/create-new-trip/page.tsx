import React from 'react'
import ChatBox from './_components/ChatBox'

export default function CreateNewTrip() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

        <div>
            <ChatBox/>
        </div>
        <div>
            Map and trip Planning to Display
        </div>
    </div>
  )
}
