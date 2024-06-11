import React from 'react';
import '../../Stylesheets/Footer.scss';
import  FooterLinksHeading from './FooterLinksHeading.jsx';
import FooterLinks from './FooterLinks.jsx';
// import {BrowserRouter as Router,Routes,Route,Link,NavLink  } from 'react-router-dom';
import {Link  } from 'react-router-dom';
import FooterLogos from './FooterLogos.jsx';

// import {} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
   
    

<div className='footer-row'>
    <div className='footerarea'>
   
    <FooterLinksHeading heading="USE CASES" hr ='tr'/>
  <span className='footerlinkset footerarea-check'>   <FooterLinks link='/fordesigner' name="For Designers"  /></span>
  <span className='footerlinkset footerarea-check'>   <FooterLinks link='/fordeveolper' name="For Developers"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='/forproductmanager' name="For Product Managers"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='/forcompliancemanager' name="For Compliance Managers"  /></span>
    </div>

    <div className='footerarea '>
    <FooterLinksHeading heading="RESOURCES" hr ='tr'/>
  <span className='footerlinkset footerarea-check'>  <FooterLinks link='https://www.getstark.co/blog/' name="Blog"  /> </span>
  <span className='footerlinkset footerarea-check'>   <FooterLinks link='https://www.getstark.co/library/' name="Library"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='http://localhost:3000/releasenotes' name="Release Notes"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='https://stark-community.slack.com/join/shared_invite/zt-2etsorpkz-gkAXB0WLHhH8A0iGkE78~Q' name="Slack Community"  /></span>
    </div>

    <div className='footerarea'>
    <FooterLinksHeading heading="HELP" />
  <span className='footerlinkset footerarea-check'>  <FooterLinks link='https://www.getstark.co/support/contact-us/#main' name="My Account"  /> </span>
  <span className='footerlinkset footerarea-check'>   <FooterLinks link='https://www.getstark.co/support/contact-us/#main' name="Support Docs"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='https://www.getstark.co/support/contact-us/#main' name="Contact Us"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='https://www.getstark.co/feature-request/' name="Feature Requests"  /></span>
    </div>

    <div className='footerarea'>
    <FooterLinksHeading heading="Company" />
  <span className='footerlinkset footerarea-check'>  <FooterLinks link='/starkframework' name="Stark Framework"  /> </span>
  <span className='footerlinkset footerarea-check'>   <FooterLinks link='/privacypolicy' name="Privacy Policy"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='/termsofservice' name="Terms of Service"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='/codeofconduct' name="Code of Conduct"  /></span>
    </div>
    </div>
    
    <div className='footer-row'>

    <div className='footerarea'>
    <FooterLinksHeading heading="SECURITY" hr ='tr'/>
  <span className='footerlinkset footerarea-check'>  <FooterLinks link='/securityoverview' name="Security Overview"  /> </span>
  <span className='footerlinkset footerarea-check'>   <FooterLinks link='https://www.getstark.co/cookies/' name="Cookie Policy"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='https://www.getstark.co/gdpr/' name="GDPR"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='https://status.getstark.co/' name="Status"  /></span>
    </div>
    
    <div className='footerarea footerareaset2'>
    <FooterLinksHeading heading="DESIGN INTEGRATIONS" hr ='tr'/>
  <span className='footerlinkset footerarea-check'>  <FooterLinks link='https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-tools' name="Stark for Figma"  /> </span>
  <span className='footerlinkset footerarea-check'>  <FooterLinks link='https://www.figma.com/community/widget/1030161589655245054/stark-accessibility-checklist' name="Stark for FigJam"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='/sketch' name="Stark for Sketch"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='https://exchange.adobe.com/apps/cc/6cbf275e/stark' name="Stark for Adobe XD"  /></span>
   </div>

    <div className='footerarea footerareaset3'>
    <FooterLinksHeading heading="DEVELOPER INTEGRATIONS" hr ='tr'/>
  <span className='footerlinkset footerarea-check'>  <FooterLinks link='https://chromewebstore.google.com/detail/stark-accessibility-check/fkfaapnmfippddbeemjjbclenphooipm' name="Stark for Chrome"  /> </span>
  <span className='footerlinkset footerarea-check'>  <FooterLinks link='https://addons.mozilla.org/en-US/firefox/addon/stark-accessibility-checker/' name="Stark for Firefox"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='https://microsoftedge.microsoft.com/addons/detail/stark-accessibility-check/idpodoagbkllmpdjdepbmlefgiblmnhl' name="Stark for Edge"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='https://apps.apple.com/us/app/stark-for-safari/id6444031666' name="Stark for Safari"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='https://chromewebstore.google.com/detail/stark-accessibility-check/fkfaapnmfippddbeemjjbclenphooipm' name="Stark for Arc"  /></span>
  <span className='footerlinkset footerarea-check'> <FooterLinks link='https://chromewebstore.google.com/detail/stark-accessibility-check/fkfaapnmfippddbeemjjbclenphooipm' name="Stark for Brave"  /></span>
    </div>

    </div>
    <div className='footer-row footer-last'>

    <span className='footer-logos  '>
<FooterLogos />
    </span>

    <div className='Footertext '>
    MADE REMOTELY WITH LOVE BY STARK LAB, INC. COPYRIGHT 2023
    </div>
   
 
    </div>


    </div>
  )
}

export default Footer