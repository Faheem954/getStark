import React from 'react'
import "../../Stylesheets/Home5.css"
import { Link } from 'react-router-dom'

const Home5 = (props) => {
  return (
    <div className='home4'>
        <img src={require(`./Home5.webp`)}></img>
   <div className='home4-part2'>

   <div className='home4-part2-chg'>
<span className='home4-part2-sp1'>Integrated into the tools </span>
</div>
<span className='home4-part2-sp2 '>for your entire team</span>
<p className='home4-part2-p1'>Get real-time reports that help manage accessibility at scale without slowing down the velocity of your team. Stark gives your up-to-date insights into the accessibility of all your design files, code repositories and live sites or applications, all in one central place for efficient collaboration across departments.</p>
   
   <Link to="/pricing" style={{textDecoration:"none"}} className='home4-part2-btn1-4'>Get started for free </Link>
   </div>
   
   
   
    </div>
  )
}

export default Home5