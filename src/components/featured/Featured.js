import React from 'react'
import { ArrowDownward, KeyboardArrowUp, TrendingUp, ArrowUpward} from '@mui/icons-material'
import './featured.css'

export default function Featured() {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className='featuredTitle'>Revenue</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$31345</span>
                <span className='featuredmoneyRate'>-12.4
                <KeyboardArrowUp className='featuredIcon'/>
                </span>
            </div>
            <span className='featureSub'>compare to last sales</span>
        </div>
        <div className='featuredItemB'>
            <span className='featuredTitle'>Sales</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$91345</span>
                <span className='featuredmoneyRate'>-62.4
                <TrendingUp className='featuredIcon'/>
                </span>
            </div>
            <span className='featureSub'>compare to last sales</span>
        </div>
        <div className='featuredItemC'>
            <span className='featuredTitle'>Returns</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$3345</span>
                <span className='featuredmoneyRate'>-10.4
                <ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className='featureSub'>compare to last sales</span>
        </div>
        <div className='featuredItemD'>
            <span className='featuredTitle'>Profit</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$91345</span>
                <span className='featuredmoneyRate'>-12.4
                <KeyboardArrowUp className='featuredIcon positive'/>
                </span>
            </div>
            <span className='featureSub'>compare to last sales</span>
        </div>
    </div>
  )
}
