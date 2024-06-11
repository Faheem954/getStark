import React from 'react'
import '../../Stylesheets/Header.scss'
// import Navbar from './Navbar/Navbar.jsx'
import Navbar2 from './Navbar/Navbar2.jsx'
import Heading from './Heading/Heading.jsx'
import HeaderHome from './Header-home/Header-home.jsx'
import Headerpic from './Header-pic/Headerpic.jsx'
const Header = () => {
  return (
    <div className=' header'>
    {/* <Navbar/> */}
    <Navbar2/>
    <Heading/>
    <HeaderHome/>
    <Headerpic/> 
    
    </div>
  )
}

export default Header