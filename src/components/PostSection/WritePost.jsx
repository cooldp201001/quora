import React, { useState } from 'react'
 import './Posts.css'
import QuestionForm from '../QuestionForm/QuestionForm'
const WritePost = () => {
  const [postWrite,setPostWrite] = useState(false)
 const showQuestionBox = ()=>{
  setPostWrite(!postWrite)
 }
  return (
    <section className='WritePostBox' >
        <div className="profileAndInputBox">
            <img className='ProfileImg' src="src\images\profile.png" alt="profile image" />
            <input type="text" className="postWriteInput"  onClick={()=>{showQuestionBox()}} placeholder='What do you want to ask or share?' />
            </div>
            <div className="PostBoxOptions">
              <a  className="postBoxOptionsLinks" href=""><i className="fa-solid fa-question"></i>Ask</a>
             <a   className="postBoxOptionsLinks answerBtn " href=""><i className="fa-solid fa-pen-to-square"></i>Answer</a>
             <a   className="postBoxOptionsLinks" href=""><i className="fa-solid fa-pen-nib"></i>Post</a>
            </div>
            { postWrite && <QuestionForm status={postWrite} />}
    </section>
  )
}

export default WritePost