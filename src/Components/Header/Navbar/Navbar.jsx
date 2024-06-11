import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import "../../../Stylesheets/Header.scss"

const UsecasesDropDown2=()=>{
  return(
  <div className='UsecaseDropdown2 '>
<div height="220px" width="30%" className="UsecaseDropdown2-Element1">
<img height="150px" width="100%" src="https://res.cloudinary.com/stark-lab/image/upload/v1711412084/medium_Header_60a6fb72ce.png"/>
<p className='UsecaseDropdown2Element1-p'>Introducing Sidekick V2 and Stark Premium to boost your design and development workflow</p>
<Link  style={{textDecoration:"none"}}><p className='UsecaseDropdown2Element1-link'>Read More on the Blog</p></Link>
</div>

<div className="UsecaseDropdown2-Element2">
<div className="UsecaseDropdown2ElementSet">
<Link style={{textDecoration:"none"}}>
  <p className='UsecaseDropdown2-h1'>Blog</p>
  <p className='UsecaseDropdown2-p'>Read about the latest updates to Stark and articles from our team.</p>
 </Link>
</div>
<div className="UsecaseDropdown2ElementSet">
<Link style={{textDecoration:"none"}}>
  <p className='UsecaseDropdown2-h1'>Library</p>
  <p className='UsecaseDropdown2-p'>Learn about all the avaliable things accessibility and inclusive design.</p>
 </Link>
</div>
<div className="UsecaseDropdown2ElementSet">
<Link style={{textDecoration:"none"}}>
  <p className='UsecaseDropdown2-h1'>The WCAG Explained</p>
  <p className='UsecaseDropdown2-p'>Simple explanations of every WCAG criteria.</p>
 </Link>
</div>
</div>

<div className="UsecaseDropdown2-Element3">

<div className="UsecaseDropdown2ElementSet">
<Link style={{textDecoration:"none"}}>
  <p className='UsecaseDropdown2-h1'>Support Center</p>
  <p className='UsecaseDropdown2-p'>Find answers of questions & tips and tricks on how to use Stark.</p>
 </Link></div>

<div className="UsecaseDropdown2ElementSet">
<Link style={{textDecoration:"none"}}>
  <p className='UsecaseDropdown2-h1'>Community</p>
  <p className='UsecaseDropdown2-p'>Join more than 3,500 accessibility folks from around the world.</p>
 </Link></div>

<div className="UsecaseDropdown2ElementSet">
<Link style={{textDecoration:"none"}}>
  <p className='UsecaseDropdown2-h1'>Stark White Paper</p>
  <p className='UsecaseDropdown2-p'>Managing and growing your accessibility posture at any scale.</p>
 </Link></div>


</div>
  </div>)
}

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
  <p className='Usecases2Dropdown-h1'>Read our new white paper</p>
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





const Navbar = () => {
  const [dropdown1 ,setDropdown1] =useState("false")
  const [dropdown2 ,setDropdown2] =useState("false")


// Function to toggle the visibility of the scrolling component


function handleMouseEnter(){return setDropdown1(true)}
function handleMouseLeave(){return setDropdown1(false)}
function handleMouseEnter2(){return setDropdown2(true)}
function handleMouseLeave2(){return setDropdown2(false)}

  return (
    <div className='navbar'>
<span className='Navbar-icon'>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Home"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.4225 22.7124V25.607C18.1716 25.7753 20.8606 24.7551 22.806 22.8056C26.5647 19.0469 26.5647 12.9531 22.806 9.19477C22.4644 8.85297 22.0977 8.53716 21.709 8.25L19.6336 10.3252L10.3245 19.6332C8.61894 16.9674 8.99804 13.4741 11.2358 11.2362C12.6405 9.8287 14.5963 9.11525 16.5775 9.28762V6.39295C13.8284 6.22472 11.1394 7.24504 9.19403 9.19458C5.43532 12.9532 5.43532 19.047 9.19403 22.8054C9.53564 23.1472 9.90231 23.463 10.291 23.7501L12.3663 21.675L21.6754 12.3668C23.381 15.0325 23.0019 18.5259 20.7641 20.7638C19.3594 22.1713 17.4036 22.8847 15.4225 22.7124Z" fill="currentColor"></path></svg> 
</span>

<span className='Navbar-nav-a'>
<Link to = './1' onMouseEnter={ handleMouseEnter}
 onMouseLeave={ handleMouseLeave}> <li>USE CASES </li>
 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1"><path d="M6.79669 8.0716C6.41769 8.6428 5.58231 8.6428 5.20331 8.0716L3.16242 4.9957C2.73821 4.35637 3.19436 3.5 3.95911 3.5L8.04089 3.5C8.80564 3.5 9.26179 4.35637 8.83758 4.9957L6.79669 8.0716Z" fill="currentColor"></path></svg>
 </Link>
<Link to='/pricing'>PRICING</Link>
<Link to='/2'>SUPPORT</Link>
<Link to='/3'   onMouseEnter={ handleMouseEnter2} onMouseLeave={ handleMouseLeave2}>RESOURCES  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1"><path d="M6.79669 8.0716C6.41769 8.6428 5.58231 8.6428 5.20331 8.0716L3.16242 4.9957C2.73821 4.35637 3.19436 3.5 3.95911 3.5L8.04089 3.5C8.80564 3.5 9.26179 4.35637 8.83758 4.9957L6.79669 8.0716Z" fill="currentColor"></path></svg></Link>
{/* <Link to='/3' id="thr">RESOURCES  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1"><path d="M6.79669 8.0716C6.41769 8.6428 5.58231 8.6428 5.20331 8.0716L3.16242 4.9957C2.73821 4.35637 3.19436 3.5 3.95911 3.5L8.04089 3.5C8.80564 3.5 9.26179 4.35637 8.83758 4.9957L6.79669 8.0716Z" fill="currentColor"></path></svg></Link> */}
<li id='tew' ><UsecasesDropDown2/></li>
</span>


<span className='Navbar-nav-b'>
    <button className='nav-btn-a'>LOGIN</button>

    <button className='nav-btn-b'>START FREE TRIAL</button>
</span>

{dropdown1 && <UsecasesDropDown1 onMouseEnter={ handleMouseEnter} onMouseLeave={handleMouseLeave}/>}

{dropdown2 && <UsecasesDropDown2 onMouseEnter={ handleMouseEnter2} onMouseLeave={handleMouseLeave2}/>}

    </div>
  )
}

export default Navbar