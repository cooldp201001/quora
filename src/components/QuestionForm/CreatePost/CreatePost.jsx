import React from 'react'
import './createPost.css'
const CreatePost = () => {
  return (
    <div className='createPostcontainer'>

      <div className="profileinfoWrapper">
        <div className='CreatePostProfileImgBox'>
          <img src="src\images\profile.png" className='CreatePostProfileImg' alt="profileImg" />
          </div>
          <div className='ProfileNameandChooseCredentialBtnBox'>
            <h1 className='profileNameHeading' >Kuldeep Patel</h1>
            <button className='ChooseCredentialBtn'>Choose credential<i className="fa-solid fa-greater-than"></i></button>
          </div>
        
      </div>
      <div className='postInputBox'>
        <input type="text" className='postInputElm' name="" id="" placeholder='Say Something...'/>
      </div>
    
     <div className="bottomBox">
      <div className="galeryAndPostBtnContainer">
        <div className='fontAndGaleryBox'>
          <h1>Aa</h1>
          <i className="fa-solid fa-photo-film"></i>
        </div>
        <button className='postBtn'>Post</button>
      </div>
     </div>
    </div>
  )
}

export default CreatePost