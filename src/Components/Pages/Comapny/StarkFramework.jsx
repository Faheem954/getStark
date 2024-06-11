

import React,{useState} from 'react'
import "../../../Stylesheets/SecurityOverview.scss"
import Navbar from '../../Header/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'

const StarkFramework = () => {   
  return (
    <div className='securityoverview'>
    <div className='securityoverview-head'>
    {/* navbar start */}<div className='navbar'>
<span className='Navbar-icon'>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Home"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.4225 22.7124V25.607C18.1716 25.7753 20.8606 24.7551 22.806 22.8056C26.5647 19.0469 26.5647 12.9531 22.806 9.19477C22.4644 8.85297 22.0977 8.53716 21.709 8.25L19.6336 10.3252L10.3245 19.6332C8.61894 16.9674 8.99804 13.4741 11.2358 11.2362C12.6405 9.8287 14.5963 9.11525 16.5775 9.28762V6.39295C13.8284 6.22472 11.1394 7.24504 9.19403 9.19458C5.43532 12.9532 5.43532 19.047 9.19403 22.8054C9.53564 23.1472 9.90231 23.463 10.291 23.7501L12.3663 21.675L21.6754 12.3668C23.381 15.0325 23.0019 18.5259 20.7641 20.7638C19.3594 22.1713 17.4036 22.8847 15.4225 22.7124Z" fill="currentColor"></path></svg> 
</span><span className='Navbar-nav-a'>
<Link to = './mk'  >  USE CASES  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1"><path d="M6.79669 8.0716C6.41769 8.6428 5.58231 8.6428 5.20331 8.0716L3.16242 4.9957C2.73821 4.35637 3.19436 3.5 3.95911 3.5L8.04089 3.5C8.80564 3.5 9.26179 4.35637 8.83758 4.9957L6.79669 8.0716Z" fill="currentColor"></path></svg></Link>
<Link to='/1' >PRICING</Link>
<Link to='/2'>SUPPORT</Link>
<Link to='/3' >RESOURCES  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1"><path d="M6.79669 8.0716C6.41769 8.6428 5.58231 8.6428 5.20331 8.0716L3.16242 4.9957C2.73821 4.35637 3.19436 3.5 3.95911 3.5L8.04089 3.5C8.80564 3.5 9.26179 4.35637 8.83758 4.9957L6.79669 8.0716Z" fill="currentColor"></path></svg>
</Link>
</span>
<span className='Navbar-nav-b'>
<Link className='nav-btn-a' to='4'>LOG IN</Link>
<Link className='nav-btn-b' to='/5'>START FREE TRIAL</Link>

</span>    </div>{/* navbar end */}

    
<div className='securityoverview-head-p1'>
 LEGAL INFORMATIONs
</div>
<div className="securityoverview-head-h1">
Stark
<div>  Framework</div>
</div> 
    </div>{/* securtyoverview head */}
    
<div className='securtyoverview-home'>

<p className='securityoverview-home-text'>Last updated: December 4, 2023</p>
{/* <h2 className='securityoverview-home-heading'>About</h2> */}
<p className='securityoverview-home-text'>
Stark Lab, Inc. (“Stark Lab,” “we,” “us,” or “our”) has prepared this Privacy Policy to explain what personal information we collect, how we use and share that information, and your choice concerning our information practices. Through our website, software-as-a-service platform and related applications, we provide website and mobile application accessibility development tools (collectively, the “Service”).
Before using the Service or submitting any personal information to Stark Lab, please review this Privacy Policy carefully and contact us if you have any questions. By using the Service, you agree to the practices described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not access the Site or otherwise use the Service.
</p>

<h2 className='securityoverview-home-heading'>1. Personal Information Collection </h2>
<h2 className='securityoverview-home-heading'>Personal Information We Collect From You: </h2>
<ul className='securityoverview-home-text'>
    <li className='securityoverview-home-text'>Stark regularly audits changes, additions, and removals to the product throughout its development lifecycle.</li>
    <li className='securityoverview-home-text'> Manual code reviews are performed in addition to automated tooling used. </li>
    <li className='securityoverview-home-text'>Open-source alerts are in place to address any identified security issues in the third-party code we utilize </li>
    <li className='securityoverview-home-text'>Monitoring and alerts are in place for all aspects of Stark's servers and infrastructure to detect potential abuse. </li>
</ul>

<h2 className='securityoverview-home-heading'>2. Personal Information Use</h2>
<ul>
  <li className='securityoverview-home-text'>Data is encrypted in transit using TLS. At rest, your data is encrypted with AES-256 block-level storage encryption.</li>  
  <li className='securityoverview-home-text'>Authorization controls are in place throughout to ensure access to your data is limited only to you. Likewise, similar controls are in place on the team level.</li>  
  <li className='securityoverview-home-text'>Stark uses Stripe for its handling of payment processing. Financial data is not stored on our servers. Read more about Stripe’s Security.</li>  
  <li className='securityoverview-home-text'>Stark uses Mixpanel for its handling of analytics data. In keeping with our clear separation of user data, personally identifiable information is not stored within Mixpanel. Additionally, Stark does not collect potentially sensitive information relating to your work (documents, images, metadata, etc.) for analytics purposes. Read more about Mixpanel’s security.</li>  
</ul>

<h2 className='securityoverview-home-heading'>Subprocessors</h2>
<p className='securityoverview-home-text'>To view a list of our subprocessors, please visit our Trust Center.</p>

<h2 className='securityoverview-home-heading'>Vulnerability Disclosure Program</h2>
<p className='securityoverview-home-text'>If you've found a vulnerability or security issue, we'd appreciate your feedback; please reach out to us at security@getstark.co so we can work to address it.</p>

<h2 className='securityoverview-home-heading'>Compliance</h2>
<p className='securityoverview-home-text'>Stark meets industry standards for privacy, data protection, and security. View our SOC 2 Type 2 report in our Trust Center and how we've mapped our privacy program to GDPR.</p>
<img height="200px" width="200px" src="https://images.getstark.co/marketing/logos/soc2type2.png?updatedAt=1701732722866"></img>
<img style={{marginLeft:'100px'}} height="200px" width="200px" src="https://images.getstark.co/marketing/logos/gdpr.png?updatedAt=1701732722827"></img>

<h2 className='securityoverview-home-heading'>More Info</h2>
<p className='securityoverview-home-text'>Still have questions? Reach out to us at support@getstark.co. Also, be sure to check out the following links:</p>
<ul>
    {/* <li ><a className='securityoverview-home-text' href='/'>Privacy Policy</a></li> */}
    {/* <li><a className='securityoverview-home-text' href='/'>Cookie Policy</a></li> */}
    {/* <li><a className='securityoverview-home-text' href='/'>Terms of Service</a></li> */}
    <li><a className='securityoverview-home-text' href='/'>GDPR</a></li>
</ul>

    </div>
{/*  */}



    <Footer/>
</div>
  )
}

export default StarkFramework