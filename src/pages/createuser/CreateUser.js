import React from "react";

export default function CreateUser() {
  return (
    <div className='flex-1 p-6'>
        <h1 className='text-2xl font-semibold text-gray-800 mb-6'>New User</h1>
        <form className='bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-wrap gap-6'>
            <div className='w-full md:w-[calc(50%-12px)] flex flex-col'>
                <label className='text-sm font-medium text-gray-600 mb-2'>UserName</label>
                <input type='text' placeholder='Daisy' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200' />
            </div>
            <div className='w-full md:w-[calc(50%-12px)] flex flex-col'>
                <label className='text-sm font-medium text-gray-600 mb-2'>Full Name</label>
                <input type='text' placeholder='Daisy Dominic' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200' />
            </div>
            <div className='w-full md:w-[calc(50%-12px)] flex flex-col'>
                <label className='text-sm font-medium text-gray-600 mb-2'>Email</label>
                <input type='email' placeholder='Daisy@gmail.com' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200' />
            </div>
            <div className='w-full md:w-[calc(50%-12px)] flex flex-col'>
                <label className='text-sm font-medium text-gray-600 mb-2'>Password</label>
                <input type='password' placeholder='******' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200' />
            </div>
            <div className='w-full md:w-[calc(50%-12px)] flex flex-col'>
                <label className='text-sm font-medium text-gray-600 mb-2'>Phone</label>
                <input type='text' placeholder='+141 6871 21' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200' />
            </div>
            <div className='w-full md:w-[calc(50%-12px)] flex flex-col'>
                <label className='text-sm font-medium text-gray-600 mb-2'>Address</label>
                <input type='text' placeholder='New York City' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200' />
            </div>
            <div className='w-full md:w-[calc(50%-12px)] flex flex-col'>
                <label className='text-sm font-medium text-gray-600 mb-2'>Age</label>
                <input type='text' placeholder='28' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200' />
            </div>
            <div className='w-full md:w-[calc(50%-12px)] flex flex-col'>
                <label className='text-sm font-medium text-gray-600 mb-2'>Gender</label>
                <div className='flex items-center space-x-4 mt-2'>
                  <div className='flex items-center'>
                    <input type='radio' name='gender' id='male' value='male' className='mr-2 cursor-pointer'/>
                    <label htmlFor='male' className='text-gray-600 cursor-pointer text-sm'>Male</label>
                  </div>
                  <div className='flex items-center'>
                    <input type='radio' name='gender' id='female' value='female' className='mr-2 cursor-pointer'/>
                    <label htmlFor='female' className='text-gray-600 cursor-pointer text-sm'>Female</label>
                  </div>
                  <div className='flex items-center'>
                    <input type='radio' name='gender' id='other' value='other' className='mr-2 cursor-pointer'/>
                    <label htmlFor='other' className='text-gray-600 cursor-pointer text-sm'>Other</label>
                  </div>
                </div>
            </div>
            <div className='w-full md:w-[calc(50%-12px)] flex flex-col'>
                <label className='text-sm font-medium text-gray-600 mb-2'>Active</label>
                <select name='active' id='active' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 cursor-pointer bg-white text-gray-700'>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select>
            </div>
            <div className='w-full mt-4'>
              <button className='w-[200px] bg-primary hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 cursor-pointer'>Create</button>
            </div>
        </form>
    </div>
  );
}
