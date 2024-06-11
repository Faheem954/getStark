import React from 'react'
import "../../Stylesheets/Home6.css"
import { Link } from 'react-router-dom'

const Home5 = (props) => {
  return (
    <div className='home4'>
        <img src={require(`./Home6.webp`)}></img>
   <div className='home4-part2'>

   <div className='home4-part2-chg'>
<span className='home4-part2-sp1'>An enterprise-grade platform </span>
</div>
<span className='home4-part2-sp2'>you can trust</span>
<p className='home4-part2-p1'>The entire Stark platform and all our integrations are built with enterprise-grade security. From SSO and our fully GDPR / SOC2-certified platform to our zero-trust policy that underpins all our tool integrations, we ensure maximum security and privacy for our customers’ data and IP.</p>
   
   <Link to="pricing" style={{textDecoration:"none"}} type='button' className='home4-part2-btn1'> Start a free trial </Link>
   </div>
   
   
   
    </div>
  )
}

export default Home5