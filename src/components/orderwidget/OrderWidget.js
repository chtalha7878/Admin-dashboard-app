import React from 'react'

export default function OrderWidget() {
    const Button = ({type}) => {
      const typeStyles = {
        Approved: 'bg-green-100 text-green-700',
        Pending: 'bg-yellow-100 text-yellow-700',
        Cancel: 'bg-red-100 text-red-700'
      }
      return <button className={`py-1 px-3 rounded-lg text-xs font-medium ${typeStyles[type] || 'bg-gray-100 text-gray-700'}`}>{type}</button>
    }
  return (
    <div className='bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex-[2] w-full overflow-x-auto'>
        <h3 className='text-lg font-medium text-gray-600 mb-4'>Latest Transactions</h3>
        <table className='w-full min-w-[600px] text-left'>
           <thead>
             <tr className='text-gray-500 text-sm border-b border-gray-100'>
                <th className='pb-3 font-medium'>Customer</th>
                <th className='pb-3 font-medium'>Date</th>
                <th className='pb-3 font-medium'>Product</th>
                <th className='pb-3 font-medium'>Amount</th>
                <th className='pb-3 font-medium'>Location</th>
                <th className='pb-3 font-medium'>Status</th>
             </tr>
           </thead>
           <tbody>
           <tr className='border-b border-gray-50 last:border-0 hover:bg-gray-50 transition duration-150'>
            <td className='py-3 flex items-center'>
                <img src='images/productsImg/earphone.jpg' alt='earphone' className='w-10 h-10 rounded-full object-cover mr-3 border border-gray-200'/>
                <span className='font-medium text-gray-700'>earphone</span>
            </td>
            <td className='py-3 text-sm text-gray-500'>4 Jan 2023</td>
            <td className='py-3 text-sm text-gray-700'>Samsung earphone</td>
            <td className='py-3 text-sm font-medium text-gray-700'>$404</td>
            <td className='py-3 text-sm text-gray-500'>USA</td>
            <td className='py-3'><Button type='Approved'/></td>
           </tr>
           <tr className='border-b border-gray-50 last:border-0 hover:bg-gray-50 transition duration-150'>
            <td className='py-3 flex items-center'>
                <img src='images/productsImg/jacket.jpeg' alt='Jacket' className='w-10 h-10 rounded-full object-cover mr-3 border border-gray-200'/>
                <span className='font-medium text-gray-700'>Jacket</span>
            </td>
            <td className='py-3 text-sm text-gray-500'>4 Jan 2023</td>
            <td className='py-3 text-sm text-gray-700'>Gucci</td>
            <td className='py-3 text-sm font-medium text-gray-700'>$334</td>
            <td className='py-3 text-sm text-gray-500'>UK</td>
            <td className='py-3'><Button type='Cancel'/></td>
           </tr>
           <tr className='border-b border-gray-50 last:border-0 hover:bg-gray-50 transition duration-150'>
            <td className='py-3 flex items-center'>
                <img src='images/productsImg/earphone.jpg' alt='earphone' className='w-10 h-10 rounded-full object-cover mr-3 border border-gray-200'/>
                <span className='font-medium text-gray-700'>earphone</span>
            </td>
            <td className='py-3 text-sm text-gray-500'>4 Jan 2023</td>
            <td className='py-3 text-sm text-gray-700'>Samsung earphone</td>
            <td className='py-3 text-sm font-medium text-gray-700'>$404</td>
            <td className='py-3 text-sm text-gray-500'>USA</td>
            <td className='py-3'><Button type='Pending'/></td>
           </tr>
           <tr className='border-b border-gray-50 last:border-0 hover:bg-gray-50 transition duration-150'>
            <td className='py-3 flex items-center'>
                <img src='images/productsImg/earphone.jpg' alt='earphone' className='w-10 h-10 rounded-full object-cover mr-3 border border-gray-200'/>
                <span className='font-medium text-gray-700'>earphone</span>
            </td>
            <td className='py-3 text-sm text-gray-500'>4 Jan 2023</td>
            <td className='py-3 text-sm text-gray-700'>Samsung earphone</td>
            <td className='py-3 text-sm font-medium text-gray-700'>$404</td>
            <td className='py-3 text-sm text-gray-500'>USA</td>
            <td className='py-3'><Button type='Approved'/></td>
           </tr>
           <tr className='border-b border-gray-50 last:border-0 hover:bg-gray-50 transition duration-150'>
            <td className='py-3 flex items-center'>
                <img src='images/productsImg/earphone.jpg' alt='earphone' className='w-10 h-10 rounded-full object-cover mr-3 border border-gray-200'/>
                <span className='font-medium text-gray-700'>earphone</span>
            </td>
            <td className='py-3 text-sm text-gray-500'>4 Jan 2023</td>
            <td className='py-3 text-sm text-gray-700'>Samsung earphone</td>
            <td className='py-3 text-sm font-medium text-gray-700'>$404</td>
            <td className='py-3 text-sm text-gray-500'>USA</td>
            <td className='py-3'><Button type='Pending'/></td>
           </tr>
           <tr className='border-b border-gray-50 last:border-0 hover:bg-gray-50 transition duration-150'>
            <td className='py-3 flex items-center'>
                <img src='images/productsImg/earphone.jpg' alt='earphone' className='w-10 h-10 rounded-full object-cover mr-3 border border-gray-200'/>
                <span className='font-medium text-gray-700'>earphone</span>
            </td>
            <td className='py-3 text-sm text-gray-500'>4 Jan 2023</td>
            <td className='py-3 text-sm text-gray-700'>Samsung earphone</td>
            <td className='py-3 text-sm font-medium text-gray-700'>$404</td>
            <td className='py-3 text-sm text-gray-500'>USA</td>
            <td className='py-3'><Button type='Cancel'/></td>
           </tr>
           </tbody>
        </table>
    </div>
  )
}
