import React from 'react'
import './style.css'
import notificationsData from '../../../data/NotificationData';
import NotficationMessage from './NotficationMessage';
const NotificationSection = () => {
    // console.log(notificationsData);
  return (
    
    <section className='middleNotificationSection'>
        <div className='headerBox'>
            <h1 className='notificationHeading'>Notification</h1>
            <div className='settingAndMarkReadBox'>
                <a href="">Mark all as read  -</a>
                <a href=""> Settings</a>
            </div>
            </div>
            {notificationsData.map((notfication)=>{
                <NotficationMessage key={notfication.id} notification={notfication}/>
            })
            }
    </section>
  )
}

export default NotificationSection