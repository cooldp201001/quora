import React from 'react'
 import Spaces  from '../components/Spaces'
 import WritePost from '../components/WritePost'
 import PostSection from '../components/PostSection'
const Home = () => {
  return (

    <section className='homePage'>
 <Spaces/>
  <WritePost/>
  <PostSection/>
    </section>
 
  )
}

export default Home