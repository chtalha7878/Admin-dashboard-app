import React from 'react'
import { Visibility } from '@mui/icons-material'

export default function MenbersWidget() {
  return (
    <div className='bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex-1 w-full'>
        <h3 className='text-lg font-medium text-gray-600 mb-4'>Newly Joined Members</h3>
        <ul className='m-0 p-0 list-none divide-y divide-gray-100'>
            <li className='py-3 flex items-center justify-between'>
                <div className="flex items-center gap-3">
                  <img src='images/menbers/daisy.jpg' alt='avatar' className='w-10 h-10 rounded-full object-cover border border-gray-200'/>
                  <div className='flex flex-col'>
                      <span className='font-medium text-gray-800 text-sm'>daisy Dominic</span>
                      <span className='text-gray-500 text-xs'>React Dev</span>
                  </div>
                </div>
                <button className='flex items-center bg-gray-50 hover:bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-medium transition duration-150 border border-gray-200'>
                   <Visibility className='!text-[16px] mr-1 text-gray-500'/>
                   Display
                </button>
            </li>
            <li className='py-3 flex items-center justify-between'>
                <div className="flex items-center gap-3">
                  <img src='images/menbers/lady.png' alt='avatar' className='w-10 h-10 rounded-full object-cover border border-gray-200'/>
                  <div className='flex flex-col'>
                      <span className='font-medium text-gray-800 text-sm'>daisy Victor</span>
                      <span className='text-gray-500 text-xs'>React Dev</span>
                  </div>
                </div>
                <button className='flex items-center bg-gray-50 hover:bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-medium transition duration-150 border border-gray-200'>
                   <Visibility className='!text-[16px] mr-1 text-gray-500'/>
                   Display
                </button>
            </li>
            <li className='py-3 flex items-center justify-between'>
                <div className="flex items-center gap-3">
                  <img src='images/menbers/daisy.jpg' alt='avatar' className='w-10 h-10 rounded-full object-cover border border-gray-200'/>
                  <div className='flex flex-col'>
                      <span className='font-medium text-gray-800 text-sm'>daisy Dominic</span>
                      <span className='text-gray-500 text-xs'>React Dev</span>
                  </div>
                </div>
                <button className='flex items-center bg-gray-50 hover:bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-medium transition duration-150 border border-gray-200'>
                   <Visibility className='!text-[16px] mr-1 text-gray-500'/>
                   Display
                </button>
            </li>
            <li className='py-3 flex items-center justify-between'>
                <div className="flex items-center gap-3">
                  <img src='images/menbers/daisy.jpg' alt='avatar' className='w-10 h-10 rounded-full object-cover border border-gray-200'/>
                  <div className='flex flex-col'>
                      <span className='font-medium text-gray-800 text-sm'>daisy Dominic</span>
                      <span className='text-gray-500 text-xs'>React Dev</span>
                  </div>
                </div>
                <button className='flex items-center bg-gray-50 hover:bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-medium transition duration-150 border border-gray-200'>
                   <Visibility className='!text-[16px] mr-1 text-gray-500'/>
                   Display
                </button>
            </li>
            <li className='py-3 flex items-center justify-between'>
                <div className="flex items-center gap-3">
                  <img src='images/menbers/daisy.jpg' alt='avatar' className='w-10 h-10 rounded-full object-cover border border-gray-200'/>
                  <div className='flex flex-col'>
                      <span className='font-medium text-gray-800 text-sm'>daisy Dominic</span>
                      <span className='text-gray-500 text-xs'>React Dev</span>
                  </div>
                </div>
                <button className='flex items-center bg-gray-50 hover:bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-medium transition duration-150 border border-gray-200'>
                   <Visibility className='!text-[16px] mr-1 text-gray-500'/>
                   Display
                </button>
            </li>
            <li className='py-3 flex items-center justify-between'>
                <div className="flex items-center gap-3">
                  <img src='images/menbers/daisy.jpg' alt='avatar' className='w-10 h-10 rounded-full object-cover border border-gray-200'/>
                  <div className='flex flex-col'>
                      <span className='font-medium text-gray-800 text-sm'>daisy Dominic</span>
                      <span className='text-gray-500 text-xs'>React Dev</span>
                  </div>
                </div>
                <button className='flex items-center bg-gray-50 hover:bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-medium transition duration-150 border border-gray-200'>
                   <Visibility className='!text-[16px] mr-1 text-gray-500'/>
                   Display
                </button>
            </li>
        </ul>
    </div>
  )
}
