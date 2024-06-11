import React from 'react'
// import Im from './homepage-header-2023-4.png'
import '../../../Stylesheets/Header.scss'
const  Headerpic = () => {
  return (
    <div className='Headerpic'> 
    {/* <span className='Headerpic-text '> The world's best companies - from startups to the Fortune 100 - trust Stark to accelerate time to digital accessibility compliance.</span> */}
  <div className='Headerpic-img'>
    <img   height='30px' width='30px'  src={require("../homepage-header-2023-4.png")}></img>
  
  </div>
    
    </div>
  )
}

export default Headerpic