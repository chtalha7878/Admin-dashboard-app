import React from 'react'
import {NotificationsNone, Language, Settings, ChatBubble} from '@mui/icons-material'

export default function TopNav() {
  return (
    <div className='w-full h-14 bg-white border-b border-gray-200 sticky top-0 z-50 flex items-center justify-between px-6'>
         <div className='flex items-center'>
             <span className='font-bold text-xl text-primary cursor-pointer'>AdminDash</span>
         </div>
         <div className='flex items-center space-x-4'>
             <div className='relative cursor-pointer text-gray-500 hover:text-primary transition duration-200'>
                 <NotificationsNone />
                 <span className='absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]'>2</span>
             </div>
             <div className='relative cursor-pointer text-gray-500 hover:text-primary transition duration-200'>
                 <Language />
                 <span className='absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]'>3</span>
             </div>
             <div className='relative cursor-pointer text-gray-500 hover:text-primary transition duration-200'>
                 <Settings />
                 <span className='absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]'>2</span>
             </div>
             <div className='relative cursor-pointer text-gray-500 hover:text-primary transition duration-200'>
                 <ChatBubble />
                 <span className='absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]'>2</span>
             </div>
             <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt='admin' className='w-9 h-9 rounded-full object-cover border border-gray-200'/>
         </div>
    </div>
  )
}
