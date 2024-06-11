import React from 'react'
import Tt from './twitter.png'
import { Link } from 'react-router-dom'
// import { SocialIcon } from 'react-social-icons'
const FooterLogos = (props) => {
  return (
    <span className='FooterLogosImg'>
   
   <Link to='https://stackoverflow.com/questions/34582405/react-wont-load-local-images'><img className='.footer-icon-set'  height='30px' width='30px' src={require('./twitter.png')}></img></Link> 
  <span className='.footer-icon-set'><Link  to='/2'><img  height='30px' width='30px' src={require('./instagram.png')}></img></Link></span>  
  <span className='.footer-icon-set2'><Link to='/3'><img   height='30px' width='30px' src={require('./slack.png')}></img></Link></span> 
  <span className='.footer-icon-set2'><Link to='/4'><img   height='30px' width='30px' src={require('./share-linkedin.png')}></img></Link></span> 
  <span className='.footer-icon-set2'><Link to='/5'><img   height='30px' width='30px'  src={require('./youtube.png')}></img></Link></span>  

    </span>
  )
}

export default FooterLogos