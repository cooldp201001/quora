import React from 'react'

const Spaces = () => {
  return (
<section className='leftSideSection'>
    <ol className='spaceContainer'>
        <li><button className='createSpaceBtn'> + Create Space</button></li>
        <li className='activeRedDot' ><img className='spaceIcon' src="https://img.icons8.com/3d-fluency/94/electronics.png" alt="electronics"/>Teachnology</li>
        <li className='activeRedDot' ><img className='spaceIcon' src="https://img.icons8.com/3d-fluency/94/gold-bars.png" alt="gold-bars"/>Economics</li>
        <li className='activeRedDot' ><img className='spaceIcon' src="https://img.icons8.com/3d-fluency/94/raspberry.png" alt="raspberry"/>Fruit</li>
        <li className='activeRedDot' ><img className='spaceIcon' src="https://img.icons8.com/3d-fluency/94/pen.png" alt="pen"/>Writing</li>
        <li className='activeRedDot' ><img className='spaceIcon' src="https://img.icons8.com/3d-fluency/94/math.png" alt="math"/>Mathmatics</li>
        <li className='activeRedDot' ><img className='spaceIcon' src="https://img.icons8.com/3d-fluency/94/books.png" alt="books"/>Books</li>
        <br/>
        <br/>
         <hr />
        </ol>
        <ol className='footerContainer'>
            <li><a href="">About</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Terms</a></li>
            <li><a href="">Privacy</a></li>
            <li><a href="">Acceptable Use</a></li>
            <li><a href="">Businesses</a></li>
            <li><a href="">Press</a></li>
            <li><a href="">Grievance Officer</a></li>
            <li><a href="">Your Ad Choices</a></li>
        </ol>
    
</section>
  )
}

export default Spaces