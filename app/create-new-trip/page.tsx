import React from 'react'
import ChatBox from './_components/ChatBox'
import {Itineray} from './_components/Itineray'
 

export default function CreateNewTrip() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-10'>

        <div>
            <ChatBox/>
        </div>
        <div className='col-span-2'>
           <Itineray/>
        </div>
    </div>
  )
}
