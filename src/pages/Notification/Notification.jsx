import React from 'react'
import './Notification.css'
import Filter from '../../components/notification/FilterSection/Filter'
import NotificationSection from '../../components/notification/notificationSection/NotificationSection'
import { Helmet } from 'react-helmet'
const Notification = () => {
  return (
    <>
   
    <Helmet>
    <title>Notifications - Quora</title>
  </Helmet>
    <div className='notificationPage'>
    
     <Filter/>
    <NotificationSection/>
      </div>
      </>
  )
}

export default Notification