import React from "react";
import { Link } from "react-router-dom";
import "./Navbar2.scss"
const UsecasesDropDown1=()=>{
    return(
    <div className='UsecasesDropdown3' >

  <div className="UsecasesDropDown2Element2">
  <div className="UsecasesDropDown2ElementSet">
  <Link style={{textDecoration:"none"}}>
    <p className='Usecases2Dropdown-h1'>Designer</p>
    <p className='usecases2Dropdown-p'>Create accessible designs with in record time right by using Figma & Sketch.</p>
   </Link>
  </div>
  <div className="UsecasesDropDown2ElementSet">
  <Link style={{textDecoration:"none"}}>
    <p className='Usecases2Dropdown-h1'>Product Managers</p>
    <p className='usecases2Dropdown-p'>Create  designs in record time right in Figma & Sketch.</p>
   </Link>
  </div>
  </div>
  
  <div className="UsecasesDropDown2Element3">  
  <div className="UsecasesDropDown2ElementSet">
  <Link style={{textDecoration:"none"}}>
    <p className='Usecases2Dropdown-h1'>Read white paper</p>
    <p className='usecases2Dropdown-p'>Managing  modern accessibe posture & growing accessibe maturity at any scale</p>
   </Link></div>
  
  <div className="UsecasesDropDown2ElementSet">
  <Link style={{textDecoration:"none"}}>
    <p className='Usecases2Dropdown-h1'>Developers</p>
    <p className='usecases2Dropdown-p'>Test & audit  code from early implement to live product.</p>
   </Link></div>
  
  </div>
  
  <div   className="UsecasesDropDown2Element1">
  {/* <img height="150px" width="100%" src="https://res.cloudinary.com/stark-lab/image/upload/v1711412084/medium_Header_60a6fb72ce.png"/> */}
  <img style={{marginLeft:'25%',padding:'0px',height:"100px",width:"100px"}}  src="https://images.getstark.co/marketing/accessibility-posture-white-paper/white-paper-callout.png?updatedAt=1709743608630"/>
  <p className='UsecasesDropDown2Element1-p'>Monitor, manage and audit your accessibility posture in one place.</p>
  <Link style={{textDecoration:"none"}}><p className='UsecasesDropDown2Element1-link'>Read More on the Blog</p></Link>
  
  </div>
  
    </div>)
  }
export default   UsecasesDropDown1;