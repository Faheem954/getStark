import React from 'react'
import '../../../Stylesheets/forDesigner.scss'
// import "./fordesigner.scss"
import { Link } from 'react-router-dom'
import Home7 from "../../Home7/Home7"
import Home3 from "../../Home3/Home3"
import Home2third from '../../Home2/Home2-3rd'
import Footer from "../../Footer/Footer"
const forDeveolper = () => {
  return (
    <div className='fordesigner'>

<div className='securityoverview-head'>
    {/* navbar start */}<div className='navbar'>
<span className='Navbar-icon'>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Home"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.4225 22.7124V25.607C18.1716 25.7753 20.8606 24.7551 22.806 22.8056C26.5647 19.0469 26.5647 12.9531 22.806 9.19477C22.4644 8.85297 22.0977 8.53716 21.709 8.25L19.6336 10.3252L10.3245 19.6332C8.61894 16.9674 8.99804 13.4741 11.2358 11.2362C12.6405 9.8287 14.5963 9.11525 16.5775 9.28762V6.39295C13.8284 6.22472 11.1394 7.24504 9.19403 9.19458C5.43532 12.9532 5.43532 19.047 9.19403 22.8054C9.53564 23.1472 9.90231 23.463 10.291 23.7501L12.3663 21.675L21.6754 12.3668C23.381 15.0325 23.0019 18.5259 20.7641 20.7638C19.3594 22.1713 17.4036 22.8847 15.4225 22.7124Z" fill="currentColor"></path></svg> 
</span>
<span className='Navbar-nav-a'>
<Link to = './mk'  >  USE CASES  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1"><path d="M6.79669 8.0716C6.41769 8.6428 5.58231 8.6428 5.20331 8.0716L3.16242 4.9957C2.73821 4.35637 3.19436 3.5 3.95911 3.5L8.04089 3.5C8.80564 3.5 9.26179 4.35637 8.83758 4.9957L6.79669 8.0716Z" fill="currentColor"></path></svg></Link>
<Link to='/pricing' >PRICING</Link>
<Link to='/pricing'>SUPPORT</Link>
<Link to='/3'  >RESOURCES  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1"><path d="M6.79669 8.0716C6.41769 8.6428 5.58231 8.6428 5.20331 8.0716L3.16242 4.9957C2.73821 4.35637 3.19436 3.5 3.95911 3.5L8.04089 3.5C8.80564 3.5 9.26179 4.35637 8.83758 4.9957L6.79669 8.0716Z" fill="currentColor"></path></svg>
</Link>
</span>

<span className='Navbar-nav-b'>
    {/* <button className='nav-btn-a'>LOGIN</button> */}
<Link className='nav-btn-a' to='4'>LOG IN</Link>
<Link className='nav-btn-b' to='/5'>START FREE TRIAL</Link>
</span>    </div>

    </div>

<div className='forDesigner-home' >
 
<div className="forDesigner-home-1">
<p>FOR DEVELOPERS</p>
<h1>Ready. Set.</h1>
<h1 style={{marginTop:"-6%",marginLeft:"20%"}}> Accessible Code</h1>
<div className='forDesigner-home-1-p2'>Stark makes the handoff from designer to developer seamless, and accelerates the implementation of accessible code. Advanced dev tools and continuous accessibility integrations in GitHub ensure an end-to-end accessibility workflow your team actually loves – fully private and secure.</div>
<div className="forDesigner-home-1-btns" style={{}}>

<Link style={{width:"30%" }}  className='nav-btn-a1'> Signup for Free</Link>
<Link style={{width:"30%"}}  className='nav-btn-b1'> Start free trial</Link>
<img className='fordesigner-divs-btn-img' height="120px" style={{}} src="https://www.getstark.co/homepage__feature-5-arrow.svg"></img>
</div>

</div>


<div className="forDesigner-home-2" >
<div className="forDesigner-home-2-img1">
  <img  src="https://images.getstark.co/marketing/headers/header-gradient.webp"></img>
</div>
<div className="forDesigner-home-2-img2">
  <img  src="https://images.getstark.co/marketing/headers/for-developers.webp?updatedAt=1701185807862"></img>
</div>
</div>

</div>   
<img style={{marginTop:"5%",marginLeft:"10%"}} height="70%" width="80%" src="https://images.getstark.co/marketing/features/for-developers-devtooling.webp"></img>

<div className="forDesigner-home3">
<h2 className='forDesigner-home3-h2-1'> <span className='forDesigner-home3-h2-1-2'><span>Advanced dev tooling</span> </span> <span>that takes</span>
</h2>
<span style={{marginLeft:"20%"}} className='forDesigner-home3-h2-2'> that takes your accessibility up a notch</span>
<p style={{marginLeft:"25%",textAlign:'center',width:"40%"}} className='forDesigner-home3-h2-p'>
Whether you’re testing on staging or production, Stark enables you to scan for accessibility issues directly in the browser. With code highlighting for issues, live preview to test fixes, and lightning fast WCAG audits, it’s a web dev powerhouse.
</p>

<Link to="/pricing" style={{marginLeft:"37%",width:"15%"}} className='nav-btn-b1'>Get Started for free</Link>
</div>

{/*  */}
<img style={{marginTop:"-10%",marginLeft:"10%"}} height="70%" width="80%" src="https://images.getstark.co/marketing/features/for-designers-smoothesthandoff.webp"></img>

<div className="forDesigner-home3">
<h2 className='forDesigner-home3-h2-1'> <h2 className='forDesigner-home3-h2-1-2'><span>Smoothest design to developer</span></h2>
</h2>
<h2 className='forDesigner-home3-h2-2'>hand-off in the business</h2>
<p className='forDesigner-home3-h2-p' style={{marginLeft:"30%",textAlign:'center',width:"40%"}}>
Whether you design in Figma, Sketch, or Adobe XD, Stark takes the guesswork out of accessibility annotations. And in Figma’s Dev Mode, annotations translate directly into code snippets for developers to take over. Specs never seemed so spectacular.
</p>

<Link to="/pricing" style={{marginLeft:"42%",width:"15%"}} className='nav-btn-b1'>Get Started for free</Link>
</div>
{/*  */}
<img style={{marginTop:"-12%",marginLeft:"10%"}} height="70%" width="80%" src="https://images.getstark.co/marketing/features/continuous-accessibility-feature-2023.webp"></img>
<div className="forDesigner-home3">
<h2 className='forDesigner-home3-h2-1'> <h2 className='forDesigner-home3-h2-1-2'><span>Real-time reports and insights</span></h2>
</h2>
<h2 className='forDesigner-home3-h2-2'>to keep your projects on track</h2>
<p className='forDesigner-home3-h2-p' style={{marginLeft:"30%",textAlign:'center',width:"40%"}}>
Real-time accessibility reports and insights of your design files and code repos streamline collaboration across departments in one place. Managing accessibility at scale without slowing down your team’s velocity just got rocket fuel added to it.
</p>

<Link to="/pricing" style={{marginLeft:"42%",width:"15%"}} className='nav-btn-b1'>Get Started for free</Link>
</div>    
{/*  */}
<img style={{marginTop:"-12%",marginLeft:"10%"}} height="70%" width="80%" src="https://images.getstark.co/marketing/features/for-designers-magic.webp"></img>
<div className="forDesigner-home3">
<h2 className='forDesigner-home3-h2-2' style={{marginLeft:"27%",fontSize:'3.2rem'}}>Come for the features,</h2>
<h2 className='forDesigner-home3-h2-1'> <h2 style={{marginLeft:"30%",marginTop:"-4%"}} className='forDesigner-home3-h2-1-2'><span >Stay For The Magic</span></h2>
</h2>

{/* <p className='forDesigner-home3-h2-p' style={{marginLeft:"30%",textAlign:'center',width:"40%"}}>
Real-time accessibility reports and insights of your design files and code repos streamline collaboration across departments in one place. Managing accessibility at scale without slowing down your team’s velocity just got rocket fuel added to it.
</p> */}

{/* <Link to="/pricing" style={{marginLeft:"42%",width:"15%"}} className='nav-btn-b1'>Get Started for free</Link> */}
 </div>    
{/*  */}




<div className ="fordesigner-set-icons">

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#CCC5F6"></circle><path d="M20.6901 11.9999C20.6901 16.8849 16.7301 20.8449 11.8451 20.8449C6.96007 20.8449 3 16.8849 3 11.9999C3 7.11486 6.96007 3.15479 11.8451 3.15479C12.722 3.15479 13.569 3.28239 14.3687 3.52003C14.762 3.6369 15.1891 3.44301 15.4058 3.09464C15.7132 2.60047 15.5648 1.85504 15.0087 1.68363C13.9048 1.34344 13.0121 1.15479 11.8451 1.15479C5.8555 1.15479 1 6.01029 1 11.9999C1 17.9894 5.8555 22.8449 11.8451 22.8449C17.8346 22.8449 22.6901 17.9894 22.6901 11.9999C22.6901 10.9537 22.5848 10.3569 22.2984 9.30323C22.1458 8.74185 21.4083 8.55837 20.901 8.84312C20.544 9.0435 20.3303 9.46087 20.4291 9.85817C20.5996 10.5439 20.6901 11.2613 20.6901 11.9999Z" fill="#381FD1"></path><path d="M8 12.6678C8 12.8837 8.17582 13.0469 8.41758 13.0469H11.6044L9.92857 17.3585C9.7033 17.9323 10.3242 18.2376 10.7198 17.7744L15.8516 11.6886C15.9505 11.5676 16 11.457 16 11.3359C16 11.1148 15.8242 10.9569 15.5824 10.9569H12.3956L14.0714 6.64002C14.2967 6.06619 13.6758 5.76086 13.2802 6.22939L8.15385 12.3151C8.05495 12.4309 8 12.5415 8 12.6678Z" fill="#381FD1"></path><path d="M18.6727 2.5761C18.755 2.27037 19.1888 2.27037 19.2711 2.5761L19.7471 4.34418C19.7758 4.45082 19.8591 4.53412 19.9658 4.56283L21.7339 5.03888C22.0396 5.1212 22.0396 5.55497 21.7339 5.63729L19.9658 6.11334C19.8591 6.14205 19.7758 6.22535 19.7471 6.33198L19.2711 8.10007C19.1888 8.4058 18.755 8.4058 18.6727 8.10007L18.1966 6.33198C18.1679 6.22535 18.0846 6.14205 17.978 6.11334L16.2099 5.63729C15.9042 5.55497 15.9042 5.1212 16.2099 5.03888L17.978 4.56283C18.0846 4.53412 18.1679 4.45082 18.1966 4.34418L18.6727 2.5761Z" fill="#381FD1"></path></svg>Sidekick AI accessibility assistant</div>

</div>
<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="19" height="17" rx="2" fill="#CCC5F6"></rect><path d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V11.25C22 11.8023 21.5523 12.25 21 12.25C20.4477 12.25 20 11.8023 20 11.25V6C20 5.44772 19.5523 5 19 5H5C4.44772 5 4 5.44772 4 6V17C4 17.5523 4.44772 18 5 18H12C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20H5C3.34315 20 2 18.6569 2 17V6Z" fill="#381FD1"></path><path d="M5.5 7.75C5.5 8.44036 6.05964 9 6.75 9C7.44036 9 8 8.44036 8 7.75C8 7.05964 7.44036 6.5 6.75 6.5C6.05964 6.5 5.5 7.05964 5.5 7.75Z" fill="#381FD1"></path><path d="M9 7.75C9 8.44036 9.55964 9 10.25 9C10.9404 9 11.5 8.44036 11.5 7.75C11.5 7.05964 10.9404 6.5 10.25 6.5C9.55964 6.5 9 7.05964 9 7.75Z" fill="#381FD1"></path><path d="M12.5 7.75C12.5 8.44036 13.0596 9 13.75 9C14.4404 9 15 8.44036 15 7.75C15 7.05964 14.4404 6.5 13.75 6.5C13.0596 6.5 12.5 7.05964 12.5 7.75Z" fill="#381FD1"></path><path d="M14.7941 12.5442C14.4401 12.4353 14.0548 12.531 13.7929 12.7929C13.531 13.0548 13.4353 13.4401 13.5442 13.7941L15.5442 20.2941C15.6644 20.6847 16.0102 20.9629 16.4175 20.9966C16.8249 21.0303 17.2117 20.8128 17.3945 20.4472L18.7454 17.7454L21.4472 16.3945C21.8128 16.2117 22.0303 15.8249 21.9966 15.4175C21.9629 15.0102 21.6847 14.6644 21.2941 14.5442L14.7941 12.5442Z" fill="#381FD1"></path></svg>Browser Extension</div>
</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" fill="#381FD1"></circle><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3V21Z" fill="#CCC5F6"></path></svg>Contrast Checker with AI suggestions</div>
</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="20" height="15" rx="2" fill="#CCC5F6"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M4.3 3C2.47746 3 1 4.51104 1 6.375V17.625C1 19.489 2.47746 21 4.3 21H19.7C21.5225 21 23 19.489 23 17.625V6.375C23 4.51104 21.5225 3 19.7 3H4.3ZM20.8 9.75V6.375C20.8 5.75368 20.3075 5.25 19.7 5.25H4.3C3.69249 5.25 3.2 5.75368 3.2 6.375V9.75H20.8ZM4.3 7.5C4.3 6.87868 4.79249 6.375 5.4 6.375C6.00751 6.375 6.5 6.87868 6.5 7.5C6.5 8.12132 6.00751 8.625 5.4 8.625C4.79249 8.625 4.3 8.12132 4.3 7.5ZM8.7 6.375C8.09249 6.375 7.6 6.87868 7.6 7.5C7.6 8.12132 8.09249 8.625 8.7 8.625C9.30751 8.625 9.8 8.12132 9.8 7.5C9.8 6.87868 9.30751 6.375 8.7 6.375ZM12 6.375C11.3925 6.375 10.9 6.87868 10.9 7.5C10.9 8.12132 11.3925 8.625 12 8.625C12.6075 8.625 13.1 8.12132 13.1 7.5C13.1 6.87868 12.6075 6.375 12 6.375ZM3 13C3 12.4477 3.40294 12 3.9 12H8.4C8.89706 12 9.3 12.4477 9.3 13C9.3 13.5523 8.89706 14 8.4 14H3.9C3.40294 14 3 13.5523 3 13ZM12 13C12 12.4477 12.4029 12 12.9 12H20.1C20.5971 12 21 12.4477 21 13C21 13.5523 20.5971 14 20.1 14H12.9C12.4029 14 12 13.5523 12 13ZM14 17C14 16.4477 13.5971 16 13.1 16H3.9C3.40294 16 3 16.4477 3 17C3 17.5523 3.40294 18 3.9 18H13.1C13.5971 18 14 17.5523 14 17ZM21 17C21 16.4477 20.5971 16 20.1 16H17.6C17.1029 16 16.7 16.4477 16.7 17C16.7 17.5523 17.1029 18 17.6 18H20.1C20.5971 18 21 17.5523 21 17Z" fill="#381FD1"></path></svg>Web Dev Tools with code highlighting</div>
</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="2" fill="#381FD1"></rect><rect x="4" y="4" width="16" height="16" rx="0.5" fill="#CCC5F6"></rect><path d="M12.9341 16.8496H11.1335L10.6456 15.2953H7.26521L6.77732 16.8496H5L7.97382 8H9.96023L12.9341 16.8496ZM8.96122 9.95543L7.78795 13.6657H10.1345L8.96122 9.95543Z" fill="#381FD1"></path><path d="M19 15.4331V16.8496H18.152C17.8577 16.8496 17.6099 16.7869 17.4085 16.6616C17.2072 16.5362 17.0639 16.3565 16.9787 16.1226C16.7851 16.4067 16.5296 16.624 16.212 16.7744C15.9023 16.9248 15.5422 17 15.1317 17C14.5199 17 14.0436 16.8412 13.7029 16.5237C13.3699 16.2061 13.2034 15.7591 13.2034 15.1825C13.2034 14.7061 13.3544 14.3175 13.6564 14.0167C13.9662 13.7075 14.396 13.507 14.9459 13.415L16.4328 13.1643C16.5722 13.1393 16.6806 13.0808 16.758 12.9889C16.8355 12.8969 16.8742 12.7841 16.8742 12.6504V12.6253C16.8742 12.3997 16.7929 12.2201 16.6302 12.0864C16.4676 11.9526 16.2469 11.8858 15.9681 11.8858C15.6738 11.8858 15.426 11.9735 15.2246 12.149C15.0233 12.3162 14.8994 12.5543 14.8529 12.8635L13.4473 12.4875C13.5945 11.8524 13.8888 11.3593 14.3302 11.0084C14.7716 10.6574 15.3253 10.4819 15.9913 10.4819C16.7735 10.4819 17.3814 10.6783 17.8151 11.071C18.2488 11.4638 18.4656 12.0111 18.4656 12.7131V15.0822C18.4656 15.3162 18.5508 15.4331 18.7212 15.4331H19ZM15.6545 15.7591C16.0184 15.7591 16.3127 15.6337 16.5373 15.383C16.7619 15.1323 16.8742 14.8022 16.8742 14.3928V14.1671L15.5151 14.3928C15.2905 14.4345 15.1124 14.5181 14.9807 14.6435C14.8568 14.7604 14.7948 14.9109 14.7948 15.0947C14.7948 15.3036 14.8684 15.4666 15.0156 15.5836C15.1704 15.7006 15.3834 15.7591 15.6545 15.7591Z" fill="#381FD1"></path></svg>Typography Checker</div>

</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="2" fill="#CCC5F6"></rect><rect x="3" y="3" width="18" height="18" rx="1" stroke="#381FD1" stroke-width="2"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V7ZM15 13C15 12.4477 15.4477 12 16 12C16.5523 12 17 12.4477 17 13V18C17 18.5523 16.5523 19 16 19C15.4477 19 15 18.5523 15 18V13ZM8 10C7.44772 10 7 10.4477 7 11V18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18V11C9 10.4477 8.55228 10 8 10Z" fill="#381FD1"></path></svg>WCAG Audit &amp; Report</div>

</div>


<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_638_28054)"><circle cx="5" cy="6" r="4" fill="#381FD1"></circle><path d="M16.0569 7.94608C16.2518 7.69723 16.4952 7.48256 16.7792 7.31855C17.9394 6.6487 19.4913 6.99032 20.2054 8.22719L22.7054 12.5573C24.8007 16.1864 23.4485 20.7886 19.8362 22.8741C17.2658 24.3582 14.1849 24.2126 11.8592 22.7112L4.85618 18.9659C3.72625 18.3616 3.35452 16.9632 3.96237 15.8855C4.42296 15.069 5.20402 14.8189 5.53197 14.7387C5.92793 14.6418 6.31006 14.6349 6.59351 14.6484C6.86698 14.6615 7.19649 14.7023 7.52781 14.7825L4.3587 9.2934C3.64459 8.05653 4.12466 6.54176 5.28488 5.87191C6.44509 5.20206 7.99696 5.54369 8.71106 6.78056L9.99319 9.00127C10.1303 8.87347 10.283 8.75977 10.4497 8.66352C11.211 8.22399 12.1409 8.21996 12.8921 8.61857C13.0871 8.36972 13.3304 8.15505 13.6144 7.99104C14.3757 7.55151 15.3056 7.54747 16.0569 7.94608Z" fill="#381FD1"></path><path d="M6.09116 8.29333C5.95309 8.05418 6.04 7.74551 6.28529 7.6039C6.53058 7.46228 6.84135 7.54134 6.97942 7.78049L10.7294 14.2757C11.0056 14.754 11.6172 14.9178 12.0954 14.6417L12.1399 14.616C12.6182 14.3399 12.7821 13.7283 12.5059 13.25L11.2559 11.0849C11.1179 10.8458 11.2048 10.5371 11.4501 10.3955C11.6954 10.2539 12.0061 10.333 12.1442 10.5721L13.3942 12.7372C13.6703 13.2155 14.2819 13.3793 14.7602 13.1032L14.8047 13.0775C15.283 12.8014 15.4469 12.1898 15.1707 11.7115L14.4207 10.4125C14.2827 10.1733 14.3696 9.86464 14.6149 9.72302C14.8601 9.5814 15.1709 9.66047 15.309 9.89961L16.059 11.1987C16.3351 11.6769 16.9467 11.8408 17.425 11.5647L17.4695 11.539C17.9478 11.2629 18.1117 10.6513 17.8355 10.173L17.5855 9.73996C17.4474 9.50082 17.5344 9.19215 17.7796 9.05053C18.0249 8.90891 18.3357 8.98798 18.4738 9.22712L20.9738 13.5573C22.4926 16.1879 21.5348 19.5842 18.8366 21.142C16.8998 22.2602 14.5907 22.1272 12.881 20.9893L5.79979 17.2022C5.6795 17.1379 5.63696 16.9883 5.70477 16.8681C5.91341 16.4982 7.04296 16.652 7.41307 16.85L10.0529 18.3051C10.4282 18.512 10.9863 18.1263 11.1878 17.748C11.2846 17.5662 11.3153 17.3419 11.2123 17.1634L6.09116 8.29333Z" fill="#CCC5F6"></path></g><defs><clipPath id="clip0_638_28054"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>Touch Targets Checker</div>

</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="22" height="18" rx="3" fill="#CCC5F6"></rect><path d="M9.5 8.875L7.25888 11.1161C6.77073 11.6043 6.77073 12.3957 7.25888 12.8839L9.5 15.125M14.5 8.875L16.7411 11.1161C17.2293 11.6043 17.2293 12.3957 16.7411 12.8839L14.5 15.125M4.5 22H19.5C20.8807 22 22 20.8807 22 19.5V4.5C22 3.11929 20.8807 2 19.5 2H4.5C3.11929 2 2 3.11929 2 4.5V19.5C2 20.8807 3.11929 22 4.5 22Z" stroke="#381FD1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>Figma Dev Mode Hand-off</div>
</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="2" fill="#381FD1"></rect><rect x="4" y="4" width="16" height="16" rx="0.5" fill="#CCC5F6"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M9.97375 5.21216C10.271 4.92928 10.729 4.92928 11.0262 5.21216L17.7504 11.6122C17.9851 11.8356 18.063 12.1845 17.9467 12.4913C17.8304 12.7981 17.5436 13 17.2241 13H3.77589C3.45643 13 3.16963 12.7981 3.0533 12.4913C2.93697 12.1845 3.0149 11.8356 3.24964 11.6122L9.97375 5.21216Z" fill="#381FD1"></path><circle cx="17.5" cy="6.5" r="1.5" fill="#381FD1"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M20 13L4 13L4 11L20 11L20 13Z" fill="#381FD1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 15C5 14.4477 5.44772 14 6 14L13 14C13.5523 14 14 14.4477 14 15C14 15.5523 13.5523 16 13 16L6 16C5.44772 16 5 15.5523 5 15Z" fill="#381FD1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 18C5 17.4477 5.44772 17 6 17L8 17C8.55228 17 9 17.4477 9 18C9 18.5523 8.55228 19 8 19L6 19C5.44772 19 5 18.5523 5 18Z" fill="#381FD1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C10 17.4477 10.4477 17 11 17L18 17C18.5523 17 19 17.4477 19 18C19 18.5523 18.5523 19 18 19L11 19C10.4477 19 10 18.5523 10 18Z" fill="#381FD1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15 15C15 14.4477 15.4477 14 16 14L18 14C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16L16 16C15.4477 16 15 15.5523 15 15Z" fill="#381FD1"></path></svg>Alt-Text Annotations with AI suggestions</div>
</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="22" height="18" rx="3" fill="#CCC5F6"></rect><path d="M16 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H16V3Z" fill="#381FD1"></path><path d="M12 3.89474H4.22222C2.99492 3.89474 2 4.93155 2 6.21053V17.7895C2 19.0684 2.99492 20.1053 4.22222 20.1053H12M16.4444 3.89474H19.7778C21.0051 3.89474 22 4.93155 22 6.21053V17.7895C22 19.0684 21.0051 20.1053 19.7778 20.1053H16.4444M16.4444 3.89474V1M16.4444 3.89474V20.1053M16.4444 20.1053V23M7.55556 9.10526L10.3333 12L7.55556 14.8947" stroke="#381FD1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>GitHub Integrations with code scanning</div>
</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="2" fill="#CCC5F6"></rect><path d="M9 4C9.55228 4 10 3.55229 10 3C10 2.44772 9.55228 2 9 2L4 2C2.89543 2 2 2.89543 2 4V9C2 9.55228 2.44772 10 3 10C3.55228 10 4 9.55228 4 9V4.5C4 4.22386 4.22386 4 4.5 4L9 4Z" fill="#381FD1"></path><path d="M15 4C14.4477 4 14 3.55229 14 3C14 2.44772 14.4477 2 15 2L20 2C21.1046 2 22 2.89543 22 4V9C22 9.55228 21.5523 10 21 10C20.4477 10 20 9.55228 20 9V4.5C20 4.22386 19.7761 4 19.5 4L15 4Z" fill="#381FD1"></path><path d="M15 20C14.4477 20 14 20.4477 14 21C14 21.5523 14.4477 22 15 22L20 22C21.1046 22 22 21.1046 22 20L22 15C22 14.4477 21.5523 14 21 14C20.4477 14 20 14.4477 20 15L20 19.5C20 19.7761 19.7761 20 19.5 20L15 20Z" fill="#381FD1"></path><path d="M9 20C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H4C2.89543 22 2 21.1046 2 20L2 15C2 14.4477 2.44772 14 3 14C3.55229 14 4 14.4477 4 15L4 19.5C4 19.7761 4.22386 20 4.5 20H9Z" fill="#381FD1"></path></svg>Landmarks Annotations</div>
</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C6.89543 4 6 4.89543 6 6V7V15C6 15.5523 6.44772 16 7 16H21C21.5523 16 22 15.5523 22 15V7C22 6.44772 21.5523 6 21 6H14C14 4.89543 13.1046 4 12 4H8Z" fill="#CCC5F6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C6.34315 3 5 4.34315 5 6V7H4C2.34315 7 1 8.34315 1 10V18C1 19.6569 2.34315 21 4 21H16C17.6569 21 19 19.6569 19 18V17H20C21.6569 17 23 15.6569 23 14V8C23 6.34315 21.6569 5 20 5L14.4142 5L13.2929 3.87868C12.7303 3.31607 11.9672 3 11.1716 3H8ZM19 15H20C20.5523 15 21 14.5523 21 14V8C21 7.44772 20.5523 7 20 7H14.4142C13.8838 7 13.3751 6.78929 13 6.41421L11.8787 5.29289C11.6911 5.10536 11.4368 5 11.1716 5H8C7.44772 5 7 5.44772 7 6V7H7.17157C7.96722 7 8.73028 7.31607 9.29289 7.87868L10.4142 9H16C17.6569 9 19 10.3431 19 12V15Z" fill="#381FD1"></path></svg>Projects with real-time Reports &amp; Insights</div>
</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="18" r="5" fill="#381FD1"></circle><circle cx="6" cy="18" r="3" fill="#CCC5F6"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M5 7L5 2C5 1.44772 5.44772 1 6 1C6.55228 1 7 1.44772 7 2L7 7L5 7Z" fill="#381FD1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.06092 7.51443C2.18474 7.20304 2.47645 7 2.80002 7L9.19998 7C9.52355 7 9.81526 7.20304 9.93908 7.51443C10.0629 7.82583 9.99446 8.18426 9.76566 8.42259L6.56568 11.7559C6.25326 12.0814 5.74673 12.0814 5.43432 11.7559L2.23434 8.42259C2.00554 8.18426 1.9371 7.82583 2.06092 7.51443Z" fill="#381FD1"></path><path d="M18.5144 8.93908C18.203 8.81526 18 8.52355 18 8.19998L18 1.80002C18 1.47645 18.203 1.18474 18.5144 1.06092C18.8258 0.937096 19.1843 1.00554 19.4226 1.23434L22.7559 4.43432C23.0814 4.74674 23.0814 5.25326 22.7559 5.56568L19.4226 8.76566C19.1843 8.99446 18.8258 9.0629 18.5144 8.93908Z" fill="#381FD1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3754 5.31444C16.3274 4.17836 17.396 4 18 4V6C17.7151 6 17.1837 6.07213 16.669 6.68634C16.1322 7.327 15.5019 8.68905 15.3314 11.5667C15.1414 14.7727 14.1741 16.6849 12.9834 17.7753C11.8166 18.8438 10.5686 19 10 19V17C10.3203 17 11.1168 16.9058 11.8611 16.2242C12.5814 15.5645 13.392 14.2268 13.5575 11.4336C13.7425 8.3121 14.4456 6.42407 15.3754 5.31444Z" fill="#381FD1"></path></svg>Focus Order Annotations</div>
</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#CCC5F6"></circle><path d="M18.9756 1.92747C18.657 0.971507 17.4437 0.685079 16.7312 1.39762L13.8812 4.24771C13.2711 4.85782 12.9284 5.68531 12.9284 6.54814V9.53831L11.0772 11.3896C10.6537 11.813 10.6537 12.4997 11.0772 12.9232C11.5007 13.3467 12.1873 13.3467 12.6108 12.9232L14.462 11.0719H17.452C18.3148 11.0719 19.1423 10.7292 19.7524 10.1191L22.6024 7.26897C23.3149 6.55643 23.0285 5.34314 22.0726 5.02448L19.7499 4.25023L18.9756 1.92747Z" fill="#381FD1"></path><path d="M3.1688 12.1557C3.1688 7.36435 7.05281 3.48022 11.844 3.48022C12.4429 3.48022 12.9284 2.9947 12.9284 2.39578C12.9284 1.79687 12.4429 1.31135 11.844 1.31135C5.85502 1.31135 1 6.16652 1 12.1557C1 18.1448 5.85502 23 11.844 23C17.833 23 22.688 18.1448 22.688 12.1557C22.688 11.5568 22.2025 11.0712 21.6036 11.0712C21.0047 11.0712 20.5192 11.5568 20.5192 12.1557C20.5192 16.947 16.6352 20.8311 11.844 20.8311C7.05281 20.8311 3.1688 16.947 3.1688 12.1557Z" fill="#381FD1"></path><path d="M10.5423 8.01622C11.1137 7.83675 11.4314 7.22806 11.252 6.65666C11.0725 6.08527 10.4638 5.76755 9.89245 5.94701C7.25372 6.77581 5.33759 9.24049 5.33759 12.1555C5.33759 15.749 8.25061 18.6621 11.844 18.6621C14.7591 18.6621 17.2237 16.7458 18.0524 14.1069C18.2319 13.5355 17.9141 12.9268 17.3427 12.7473C16.7713 12.5679 16.1627 12.8857 15.9832 13.4571C15.4303 15.218 13.7846 16.4933 11.844 16.4933C9.4484 16.4933 7.50639 14.5512 7.50639 12.1555C7.50639 10.2149 8.78154 8.56926 10.5423 8.01622Z" fill="#381FD1"></path></svg>Compliance Center</div>
</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="18" height="18" rx="2" fill="#381FD1"></rect><rect x="6" y="6" width="14" height="14" rx="0.5" fill="#CCC5F6"></rect><rect x="2" y="2" width="16" height="16" rx="2" fill="#381FD1"></rect><rect x="4" y="10" width="8" height="2" rx="1" fill="#CCC5F6"></rect><rect x="4" y="6" width="10" height="2" rx="1" fill="#CCC5F6"></rect></svg>ARIA &amp; Notes Annotations</div>
</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" fill="#CCC5F6"></rect><path d="M6.98582 9.18497L8.25145 10.0287L10.357 7.22127M14.3152 8.625H16.5652M14.25 15.375H16.5M6.98582 15.9362L8.25145 16.78L10.357 13.9725M5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V5.25C21 4.00736 19.9926 3 18.75 3H5.25C4.00736 3 3 4.00736 3 5.25V18.75C3 19.9926 4.00736 21 5.25 21Z" stroke="#381FD1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>Ticketing and PM system Integrations</div>
</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="2" fill="#CCC5F6"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.89543 2.89543 2 4 2H6C6.55228 2 7 2.44772 7 3C7 3.55228 6.55228 4 6 4L4 4V6C4 6.55229 3.55228 7 3 7C2.44772 7 2 6.55229 2 6V4ZM9 3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3C15 3.55228 14.5523 4 14 4H10C9.44772 4 9 3.55228 9 3ZM17 3C17 2.44772 17.4477 2 18 2H20C21.1046 2 22 2.89543 22 4V6C22 6.55228 21.5523 7 21 7C20.4477 7 20 6.55228 20 6V4H18C17.4477 4 17 3.55228 17 3ZM21 9C21.5523 9 22 9.44772 22 10V14C22 14.5523 21.5523 15 21 15C20.4477 15 20 14.5523 20 14V10C20 9.44772 20.4477 9 21 9ZM3 9C3.55228 9 4 9.44772 4 10V14C4 14.5523 3.55228 15 3 15C2.44772 15 2 14.5523 2 14V10C2 9.44772 2.44772 9 3 9ZM3 17C3.55228 17 4 17.4477 4 18V20H6C6.55229 20 7 20.4477 7 21C7 21.5523 6.55229 22 6 22H4C2.89543 22 2 21.1046 2 20V18C2 17.4477 2.44772 17 3 17ZM21 17C21.5523 17 22 17.4477 22 18V20C22 21.1046 21.1046 22 20 22H18C17.4477 22 17 21.5523 17 21C17 20.4477 17.4477 20 18 20H20V18C20 17.4477 20.4477 17 21 17ZM9 21C9 20.4477 9.44772 20 10 20H14C14.5523 20 15 20.4477 15 21C15 21.5523 14.5523 22 14 22H10C9.44772 22 9 21.5523 9 21Z" fill="#381FD1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 7H10V11H14V7H16V17H14V13H10V17H8V7Z" fill="#381FD1"></path></svg>Headings Annotations</div>
</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_816_23936)"><circle cx="12" cy="12" r="10" fill="#CCC5F6"></circle><circle cx="12" cy="12" r="11" stroke="#381FD1" stroke-width="2"></circle><path d="M13.8748 6.85712C13.8748 7.88278 13.0354 8.71424 11.9999 8.71424C10.9644 8.71424 10.1249 7.88278 10.1249 6.85712C10.1249 5.83146 10.9644 5 11.9999 5C13.0354 5 13.8748 5.83146 13.8748 6.85712Z" fill="#381FD1"></path><path d="M8.44265 10.0384L8.42513 10.0361L8.42021 10.0354C7.73634 9.94239 7.10577 10.416 7.01178 11.0934C6.91778 11.7708 7.39684 12.3956 8.08074 12.4887L8.0882 12.4897L8.10934 12.4925C8.97124 12.6059 9.83676 12.6984 10.7042 12.7582C10.6398 13.4098 10.5078 13.977 10.3031 14.4966C9.9866 15.2999 9.46749 16.0623 8.6264 16.8765C8.13269 17.3544 8.12362 18.1383 8.60613 18.6273C9.08864 19.1163 9.88002 19.1253 10.3737 18.6474C11.0588 17.9841 11.6162 17.3036 12.0514 16.5755C12.4462 17.2703 12.951 17.9448 13.5939 18.6148C14.0694 19.1105 14.8606 19.1304 15.361 18.6594C15.8614 18.1883 15.8815 17.4047 15.406 16.909C14.1849 15.6364 13.618 14.3871 13.373 12.7528C14.2145 12.6926 15.0542 12.6025 15.8906 12.4925L15.9117 12.4897L15.92 12.4886C16.6039 12.3955 17.0822 11.7709 16.9882 11.0935C16.8943 10.4161 16.2628 9.94252 15.579 10.0355L15.5749 10.0361L15.5574 10.0384C14.3801 10.1932 13.1877 10.3334 11.9996 10.3334C10.8081 10.3334 9.62197 10.1936 8.44265 10.0384Z" fill="#381FD1"></path></g><defs><clipPath id="clip0_816_23936"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>And so much more ...</div>
</div>

<div className="fordesigner-set-icons-icon">
<div class="flex gap-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="9" r="8" fill="#381FD1"></circle><circle cx="9" cy="15" r="8" fill="#381FD1"></circle><circle cx="9" cy="15" r="6" fill="#CCC5F6"></circle></svg>Vision Simulator + Generator</div>
</div>

</div >



{/*  */}
<Home7/>
<Home3/>
<Home2third/>
<Footer/>
    </div>
  )
}

export default forDeveolper