import React from 'react'
import { ArrowDownward, KeyboardArrowUp, TrendingUp } from '@mui/icons-material'

export default function Featured() {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200'>
            <span className='text-lg font-medium text-gray-600'>Revenue</span>
            <div className='my-4 flex items-center'>
                <span className='text-3xl font-bold text-gray-800'>$31,345</span>
                <span className='flex items-center text-sm text-green-500 ml-4 font-medium'>
                  +12.4%
                  <KeyboardArrowUp fontSize='small' />
                </span>
            </div>
            <span className='text-sm text-gray-400'>Compared to last month</span>
        </div>
        <div className='bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200'>
            <span className='text-lg font-medium text-gray-600'>Sales</span>
            <div className='my-4 flex items-center'>
                <span className='text-3xl font-bold text-gray-800'>$91,345</span>
                <span className='flex items-center text-sm text-green-500 ml-4 font-medium'>
                  +62.4%
                  <TrendingUp fontSize='small' className='ml-1' />
                </span>
            </div>
            <span className='text-sm text-gray-400'>Compared to last month</span>
        </div>
        <div className='bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200'>
            <span className='text-lg font-medium text-gray-600'>Returns</span>
            <div className='my-4 flex items-center'>
                <span className='text-3xl font-bold text-gray-800'>$3,345</span>
                <span className='flex items-center text-sm text-red-500 ml-4 font-medium'>
                  -10.4%
                  <ArrowDownward fontSize='small' />
                </span>
            </div>
            <span className='text-sm text-gray-400'>Compared to last month</span>
        </div>
        <div className='bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200'>
            <span className='text-lg font-medium text-gray-600'>Profit</span>
            <div className='my-4 flex items-center'>
                <span className='text-3xl font-bold text-gray-800'>$91,345</span>
                <span className='flex items-center text-sm text-green-500 ml-4 font-medium'>
                  +12.4%
                  <KeyboardArrowUp fontSize='small' />
                </span>
            </div>
            <span className='text-sm text-gray-400'>Compared to last month</span>
        </div>
    </div>
  )
}
