import React from 'react'
import './Filter.css'
const Filter = () => {
  return (
    <section className='leftFilterSection'>
      <h1 className='filterHeading' >Filter</h1>
      <hr />

      <ul className='filterList'>
        <li className='activeLink' > <a href="">All Notifications</a></li>
        <li  ><a href="">Stories</a></li>
        <li ><a href="">Questions</a></li>
        <li><a href="">Spaces</a></li>
        <li> <a href="">People updates</a></li>
        <li> <a href="">Comments and mentions</a></li>
        <li> <a href="">Your profile</a></li>
        <li> <a href="">Announcements</a></li>
        <li> <a href="">Earnings</a></li>
        <li> <a href="">People updates</a></li>
        <li> <a href="">Subscriptions</a></li>
      </ul>
    </section>
  )
}

export default Filter







