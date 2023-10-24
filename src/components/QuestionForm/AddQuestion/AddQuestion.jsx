import React, { useState } from 'react'
 import './AddQuestion.css'
const AddQuestion = () => {
  const [showDropDown,setstatus] = useState(false);
  const change =()=>{
    setstatus(!showDropDown)
  }

  return (
    <div className='addQuestionBox' >
      <div className='Tipsbox'>
        <h2>Tips on getting good answers quickly</h2>
        <ul className='TipsList'>
           <li>Make sure your question has not been asked already</li>
           <li>Keep your question short and to the point</li>
           <li>Double-click grammer and spelling</li>
        </ul>
      </div>

        <div className="addQuestionLowerbox">
               <div className='profileBox'>
          <div className="addQuestionProfileImgBox">
            <img src="src\images\profile.png" alt="" />
          </div>
          <i className="fa-solid fa-play"></i>
          </div>
             <div className='publicBtnBox'>
          <button className='publicBtn' onClick={change} ><i className="fa-solid fa-user-group"></i> Public <i className="fa-solid fa-chevron-down"></i></button>
           
           <div className={`publicBtnDropDown  ${showDropDown?"showElm":""}`}>
           
           <p className='publicTag'><b>Public</b> <br />
Others will see your identity alongside this question on your profile and in their feeds.</p>

 <p className='limitedTag'><b>Limited</b><br />Your identity will be shown but this question will not appear in your followers' feeds or your profile.</p>
 </div>
             </div>
        </div>

        <div className="QuestionWriteInputBox">
          <input  className="QuestionWriteInputElm" type="text" placeholder='Start your question with "What", "How", "Why", etc.'/>
        </div>
      
        <div className="cancelAndAddQuestionBtnBox">
          <button className='cancelBtn'>Cancel</button>
          <button className='AddQuestionBtn'>Add Question</button>
        </div>
 
    </div>
  )
}

export default AddQuestion