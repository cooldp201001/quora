import React from 'react'
import '../components/styles/Posts.css'
const Posts = ({ post }) => {
  // console.log(post);
  const { accountName, profileImage, postTitle, postText, postImage, postDate,
    designation, likes, comments, share, isFollowing, responses, tags } = post;
  return (
    // <div className="post">
    //   <h3>{postTitle}</h3>
    //   <p>{postText}</p>
    //   <img src={images} alt="" />
    //   <p>Posted by: {accountName}</p>
    //   <p>Post Date: {postDate}</p>
    //   <p>Likes: {likes}</p>
    //   <p>Comments: {comments}</p>
    //   <p>Tags: {tags.join(',')}</p>
    // </div>

    <div className='post' >

      <div className='profileInfoBox' >

        <div className='profileTextInfo' >

          <div className='postProfileImageIconBox'>
            <img className='postProfileImageIcon' src={profileImage} alt="" />
          </div>
          <div>
            <h3>{accountName} - <span className='isFollowing'>{isFollowing ? "unfollow" : "follow"}</span> </h3>
            <p>{designation} <span className='postTime'><b>-</b> {postDate}</span></p>
          </div>
        </div>

        {/* cross sign */}
        <div >
          <i className="fa-solid fa-xmark"></i>
        </div>


      </div>

      <h3 className='postTitleHeading' >{postText}</h3>
      <div className='postImageBox'>
        <img className='postImage' src={postImage} alt="" />
      </div>
      {/* reaction options */}
      <div className='postReactionBox'>
        <div className="reactionBtnsBox">
          <div className='likedAndDislikeBtnBox'>
            <button className='likeBtn'><i className="fa-solid fa-circle-arrow-up"></i> <b>Upvote .</b>{likes}</button>
            <button className="dislike"><i className="fa-solid fa-circle-down"></i></button>
          </div>
          <div className='commentAndshareBtnBox'>
            <button><i className="fa-solid fa-comment"></i>  {comments}</button>
            <button><i className="fa-solid fa-share"></i>  {share}</button>
          </div>
        </div>
  

          <div><i className="fa-solid fa-ellipsis"></i></div>
        


      </div>
    </div>
  );
}

export default Posts