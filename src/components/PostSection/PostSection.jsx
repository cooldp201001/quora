import React from 'react'
import Data from '../../data/Data'
import Posts from './Posts'
const PostSection = () => {
  return (
    <section className='postSection' >
       {Data.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
    </section>
  )
}

export default PostSection