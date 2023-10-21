import React from 'react'
import './QuestionForm.css'
import AddQuestion from './AddQuestion/AddQuestion'
const QuestionForm = ({status}) => {
 const change=()=>{
  status()
  //  console.log(status);
 }
  return (
     <div className="questionBoxContainer">

    
    <div className='QuestionDialogBox'>

      <button onClick={change} className='closeBtn'><i className="fa-solid fa-xmark"></i></button>
      <div className="AddQuestionAndCreatePostBtnBox">

        <div className='addQuestionBtnBox'>
        <button className='addQuestionBtn'>Add Question</button
        ></div>
         
         <div className='createPostBtnBox' > 
          <button className='createPostBtn'>create Post</button>
          </div>
      </div>
          <AddQuestion/>

      </div>
      </div>
  )
}

export default QuestionForm