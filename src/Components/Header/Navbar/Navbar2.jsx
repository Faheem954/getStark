import React, { useState } from 'react';
import "./Navbar2.scss";
import UsecasesDropDown2 from './Dropdown2';
import UsecasesDropDown1 from './Droppdown1';
import { Link } from 'react-router-dom';
// function showsidebar(){
//   const showSidebar = document.getElementsByClassName('navbar-sidebar')
// showSidebar.style.display = ''
// }
// function hidesidebar(){
//   const showSidebar = document.getElementsByClassName('navbar-sidebar')
// showSidebar.style.display = 'none'
// }

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menuName) => {
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav>

{/* without responsive */}

      <ul className='nav-home-ul '>
        <li>
      <span className='Navbar-icon setclose'>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Home"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.4225 22.7124V25.607C18.1716 25.7753 20.8606 24.7551 22.806 22.8056C26.5647 19.0469 26.5647 12.9531 22.806 9.19477C22.4644 8.85297 22.0977 8.53716 21.709 8.25L19.6336 10.3252L10.3245 19.6332C8.61894 16.9674 8.99804 13.4741 11.2358 11.2362C12.6405 9.8287 14.5963 9.11525 16.5775 9.28762V6.39295C13.8284 6.22472 11.1394 7.24504 9.19403 9.19458C5.43532 12.9532 5.43532 19.047 9.19403 22.8054C9.53564 23.1472 9.90231 23.463 10.291 23.7501L12.3663 21.675L21.6754 12.3668C23.381 15.0325 23.0019 18.5259 20.7641 20.7638C19.3594 22.1713 17.4036 22.8847 15.4225 22.7124Z" fill="currentColor"></path></svg> 
</span>
        </li>
        <li  onMouseEnter={() => handleMouseEnter('home')}
            onMouseLeave={handleMouseLeave}>
         <a className='border-hover hideonmobile'> UseCases 
         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1"><path d="M6.79669 8.0716C6.41769 8.6428 5.58231 8.6428 5.20331 8.0716L3.16242 4.9957C2.73821 4.35637 3.19436 3.5 3.95911 3.5L8.04089 3.5C8.80564 3.5 9.26179 4.35637 8.83758 4.9957L6.79669 8.0716Z" fill="currentColor"></path></svg>
        
         </a>
          {activeMenu === 'home' && <Dropdown menu ={ <UsecasesDropDown1/>} />}
        </li>
        <li >
        <a className='border-hover hideonmobile' >  Pricing</a>
          
        </li>
        <li >
        <a className='border-hover hideonmobile'>   Support </a>
          
        </li>
        <li  onMouseEnter={() => handleMouseEnter('contact')}
            onMouseLeave={handleMouseLeave}>
         <a className='border-hover hideonmobile'> Resources
         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1"><path d="M6.79669 8.0716C6.41769 8.6428 5.58231 8.6428 5.20331 8.0716L3.16242 4.9957C2.73821 4.35637 3.19436 3.5 3.95911 3.5L8.04089 3.5C8.80564 3.5 9.26179 4.35637 8.83758 4.9957L6.79669 8.0716Z" fill="currentColor"></path></svg>

         </a>
          {activeMenu === 'contact' && <Dropdown menu= {<UsecasesDropDown2/>} />}
        </li>
      
{/* <li className='Navbarbuttons'> */}
 <li className='Navbarbutton1  hideonmobile'>  <Link className='nav-btn-a' to='4'>LOG IN</Link></li> 
<li  className='Navbarbutton2 mobilenavbtn1set'><Link className='nav-btn-b' to='/5'>START FREE TRIAL</Link></li>
        {/* </li>    */}
       
<li className='Navbar-menu hideonlaptop setclose'>
{/* <svg onClick={showsidebar} xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#0000F5"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> */}
<svg xmlns="http://www.w3.org/2000/svg" className='hideonlaptop' height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
  </li>
      </ul>

{/* for responsive */}
<ul className='navbar-vertical navbar-sidebar hideonlaptop'>
        <li>Login</li>
        <li className='' >
        <n className="navbar-sidebar-usecase-color">  UseCases</n>
         <ul className='usecases-vertically-list'>
          <li>For Designers</li>
          <li>For Deveolpers</li>
          <li>For Product Managers</li>
          <li>For Compliance Managers</li>
          </ul> 
         <a >
         </a>
        </li>
        <li >
        <a >  Pricing</a>
      
        </li>
        <li >
        <a >   Support </a>
    
          
        </li>
        <li ><a > Blog</a></li>    
        <li ><a > LIBRARY</a></li>   
        <li ><a > THE WCAG EXPLAINED</a></li>    
        <li ><a > COMMUNITY</a></li>
      

 {/* <li>  <Link  to='4'>LOG IN</Link></li>  */}
      {/* <hr/>     */}

        

      </ul>




    </nav>
  );
}





function Dropdown({ menu }) {
  return (
    <div className="dropdown-content">
      <p> {menu}</p>
    </div>
  );
}

export default Navbar;










// import react from "react"
// import {Link} from 'react-router-dom'

// const Navbar2=()=>{
//     return(<>
//     <div className="navbar2">
//     <span className='Navbar-icon'>
// <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Home"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.4225 22.7124V25.607C18.1716 25.7753 20.8606 24.7551 22.806 22.8056C26.5647 19.0469 26.5647 12.9531 22.806 9.19477C22.4644 8.85297 22.0977 8.53716 21.709 8.25L19.6336 10.3252L10.3245 19.6332C8.61894 16.9674 8.99804 13.4741 11.2358 11.2362C12.6405 9.8287 14.5963 9.11525 16.5775 9.28762V6.39295C13.8284 6.22472 11.1394 7.24504 9.19403 9.19458C5.43532 12.9532 5.43532 19.047 9.19403 22.8054C9.53564 23.1472 9.90231 23.463 10.291 23.7501L12.3663 21.675L21.6754 12.3668C23.381 15.0325 23.0019 18.5259 20.7641 20.7638C19.3594 22.1713 17.4036 22.8847 15.4225 22.7124Z" fill="currentColor"></path></svg> 
// </span>

// <span className='Navbar-nav-a'>
// <Link to = './1' > <li>USE CASES </li><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1"><path d="M6.79669 8.0716C6.41769 8.6428 5.58231 8.6428 5.20331 8.0716L3.16242 4.9957C2.73821 4.35637 3.19436 3.5 3.95911 3.5L8.04089 3.5C8.80564 3.5 9.26179 4.35637 8.83758 4.9957L6.79669 8.0716Z" fill="currentColor"></path></svg></Link>
// <Link to='/pricing'>PRICING</Link>
// <Link to='/2'>SUPPORT</Link>
// <Link to='/3'  >RESOURCES  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1"><path d="M6.79669 8.0716C6.41769 8.6428 5.58231 8.6428 5.20331 8.0716L3.16242 4.9957C2.73821 4.35637 3.19436 3.5 3.95911 3.5L8.04089 3.5C8.80564 3.5 9.26179 4.35637 8.83758 4.9957L6.79669 8.0716Z" fill="currentColor"></path></svg></Link>
// <li id='tew' ></li>
// </span>


// <span className='Navbar-nav-b'>
// <Link className='nav-btn-a' to='4'>LOG IN</Link>
// <Link className='nav-btn-b' to='/5'>START FREE TRIAL</Link>
// </span>


//     </div>
    
//     </>)

// }
// export default Navbar2;