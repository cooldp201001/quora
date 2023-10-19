import React from 'react'

const NotificationMsg = ({data}) => {
      let {isRead,message, profileName , profileImage ,time,type} = data;
    // console.log(isRead,message,profileImage,profileName,time,time);
    // if(!isRead){
    // let notificationbox=document.getElementById("notificationBox");
    //  notificationbox.classList.add(".notReadMessage");
    // console.log(notificationbox);
    // }
  return (
    <div className={`notificationBox ${!isRead ? 'notReadMessage' : ''}`}>
            <div className='notificationProfileInfo' >
        <div className="notificationprofileImgBox">
            <img src={profileImage} alt={profileName} />
        </div>
        <div className="notificationInfo">
            <div>
            <h1>{profileName} -{time}</h1>
           <p>{message}</p>
           </div>
          
        </div>
        </div>

        <div className='notificationEllipsis' >
           <i className="fa-solid fa-ellipsis"></i>
           </div>
           
    </div>
  )
}

export default NotificationMsg