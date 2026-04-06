import React from 'react'
import {NotificationsNone, Language, Settings, ChatBubble} from '@mui/icons-material'
import './topnav.css'
export default function TopNav() {
  return (
    <div className='topnavContainer'>
     <div className='topnavWrapper'>
         <div className='topLeft'>
             <span className='logo'>AdminDash</span>
         </div>
         <div className='topRight'>
             <div className='topnavIconContainer'>
                 <NotificationsNone className='topnavIcon'/>
                 <span className='topIconBadge'>2</span>
             </div>
             <div className='topnavIconContainer'>
                 <Language className='topnavIcon'/>
                 <span className='topIconBadge'>3</span>
             </div>
             <div className='topnavIconContainer'>
                 <Settings className='topnavIcon'/>
                 <span className='topIconBadge'>2</span>
             </div>
             <div className='topnavIconContainer'>
                 <ChatBubble className='topnavIcon'/>
                 <span className='topIconBadge'>2</span>
             </div>
             <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt='internet issue' className='adminImg'/>
         </div>
     </div>
    </div>
  )
}
