import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar' >
      <h2 className="quoraHeading">Quora</h2>
      <a className='navlink' href=""><i className="fa-solid fa-house"></i></a>
      <a className='navlink'  href=""><i className="fa-solid fa-rectangle-list"></i></a>
      <a className='navlink'  href=""><i className="fa-solid fa-pen-to-square"></i></a>
      <a className='navlink' href=""><i className="fa-solid fa-people-group"></i></a>
      <a className='navlink' href=""><i className="fa-solid fa-bell"></i></a>
      <div className='searchBox'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input className='searchInput' type="text" placeholder='Search Quora' />
      </div> 
      <button className='PremiumBtn'>Try Quora+</button>
      <a  href="" className=' navlink ProfileIcon'><img src="src\images\profile.png" alt="profile" /></a>
       <a   className='navlink' href="" > <i className="fa-solid fa-globe "></i></a>
     
      <div className='addQuestionContainer'>
        <button  className='addBtn  '>Add question</button>
        <button className='menuBtn ' ><i className="fa-solid fa-chevron-down"></i></button>
      </div>
    </nav>
  )
}

export default Navbar