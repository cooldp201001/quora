import React from 'react'
 import Spaces  from '../../components/Spaces/Spaces'
 import WritePost from '../../components/PostSection/WritePost'
 import PostSection from '../../components/PostSection/PostSection'
 import './Home.css'
import { Helmet } from 'react-helmet'
const Home = () => {
  return (
   <>
   <Helmet>
    <title>Quora</title>
   </Helmet>
    <section className='homePage'>
 <Spaces/>
  <WritePost/>
  <PostSection/>
    </section>
    </>
  )
}

export default Home