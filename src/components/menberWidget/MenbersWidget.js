import React from 'react'
import { Visibility } from '@mui/icons-material'
import './menbersWidget.css'

export default function MenbersWidget() {
  return (
    <div className='menbersWidgetContainer'>
        <span className='menbersWidgetTitle'>Newly Joined Menbers</span>
        <ul className='menbersWidgerList'>
            <li className='menbersWidgerListItem'>
                <img src='images/menbers/daisy.jpg' alt='internet issue' className='widgetImg'/>
                <div className='menberWidgetUser'>
                    <span className='menberWidgetUsername'>daisy Dominic</span>
                    <span className='menberWidgetUserTitle'>React Dev</span>
                </div>
                <button className='menberWidgetButton'>
                   <Visibility className='menberWidgetIcon'/>
                   Display
                </button>
            </li>
            <li className='menbersWidgerListItem'>
                <img src='images/menbers/lady.png' alt='internet issue' className='widgetImg'/>
                <div className='menberWidgetUser'>
                    <span className='menberWidgetUsername'>daisy Victor</span>
                    <span className='menberWidgetUserTitle'>React Dev</span>
                </div>
                <button className='menberWidgetButton'>
                   <Visibility className='menberWidgetIcon'/>
                   Display
                </button>
            </li>
            <li className='menbersWidgerListItem'>
                <img src='images/menbers/daisy.jpg' alt='internet issue' className='widgetImg'/>
                <div className='menberWidgetUser'>
                    <span className='menberWidgetUsername'>daisy Dominic</span>
                    <span className='menberWidgetUserTitle'>React Dev</span>
                </div>
                <button className='menberWidgetButton'>
                   <Visibility className='menberWidgetIcon'/>
                   Display
                </button>
            </li>
            <li className='menbersWidgerListItem'>
                <img src='images/menbers/daisy.jpg' alt='internet issue' className='widgetImg'/>
                <div className='menberWidgetUser'>
                    <span className='menberWidgetUsername'>daisy Dominic</span>
                    <span className='menberWidgetUserTitle'>React Dev</span>
                </div>
                <button className='menberWidgetButton'>
                   <Visibility className='menberWidgetIcon'/>
                   Display
                </button>
            </li>
            <li className='menbersWidgerListItem'>
                <img src='images/menbers/daisy.jpg' alt='internet issue' className='widgetImg'/>
                <div className='menberWidgetUser'>
                    <span className='menberWidgetUsername'>daisy Dominic</span>
                    <span className='menberWidgetUserTitle'>React Dev</span>
                </div>
                <button className='menberWidgetButton'>
                   <Visibility className='menberWidgetIcon'/>
                   Display
                </button>
            </li>
            <li className='menbersWidgerListItem'>
                <img src='images/menbers/daisy.jpg' alt='internet issue' className='widgetImg'/>
                <div className='menberWidgetUser'>
                    <span className='menberWidgetUsername'>daisy Dominic</span>
                    <span className='menberWidgetUserTitle'>React Dev</span>
                </div>
                <button className='menberWidgetButton'>
                   <Visibility className='menberWidgetIcon'/>
                   Display
                </button>
            </li>
            <li className='menbersWidgerListItem'>
                <img src='images/menbers/daisy.jpg' alt='internet issue' className='widgetImg'/>
                <div className='menberWidgetUser'>
                    <span className='menberWidgetUsername'>daisy Dominic</span>
                    <span className='menberWidgetUserTitle'>React Dev</span>
                </div>
                <button className='menberWidgetButton'>
                   <Visibility className='menberWidgetIcon'/>
                   Display
                </button>
            </li>
        </ul>
    </div>
  )
}
