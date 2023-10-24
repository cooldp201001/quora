import React from 'react'
//  import './Posts.css'
const WritePost = () => {
  return (
    <section className='WritePostBox' >
        <div className="profileAndInputBox">
            <img className='ProfileImg' src="src\images\profile.png" alt="profile image" />
            <input type="text" className="postWriteInput" placeholder='What do you want to ask or share?' />
            </div>
            <div className="PostBoxOptions">
              <a  className="postBoxOptionsLinks" href=""><i className="fa-solid fa-question"></i>Ask</a>
             <a   className="postBoxOptionsLinks answerBtn " href=""><i className="fa-solid fa-pen-to-square"></i>Answer</a>
             <a   className="postBoxOptionsLinks" href=""><i className="fa-solid fa-pen-nib"></i>Post</a>
            </div>
        
    </section>
  )
}

export default WritePost