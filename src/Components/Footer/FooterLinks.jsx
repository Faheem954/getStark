import React from 'react'
import {Link} from 'react-router-dom'

const FooterLinks = (props) => {
      return (
    <div className='FooterLink'>

   <Link to={`${props.link}`} className='Footer-link-hov'>{props.name}</Link>

     </div>
      )
}

export default FooterLinks