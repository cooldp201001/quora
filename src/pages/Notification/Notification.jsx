import React from 'react'

import './style.css'
import Filter from '../../components/notification/FilterSection/Filter'
import NotificationSection from '../../components/notification/notificationSection/NotificationSection'
const Notification = () => {
  return (
    <div className='notificationPage'>
     <Filter/>
    <NotificationSection/>
      </div>
  )
}

export default Notification