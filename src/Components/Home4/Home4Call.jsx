import React from 'react'
import "../../Stylesheets/Home4.css"
import { Link } from 'react-router-dom'
const Home4Call = (props) => {
  return (
    <div className='home4'>
        <img src={require(`./Home4-${props.img}.webp`)}></img>
   <div className='home4-part2'>

   <div className='home4-part2-chg'>
<span className='home4-part2-sp1'>{props.text1} &nbsp;</span>
</div>
<span className='home4-part2-sp2'>{props.text2}</span>
<p className='home4-part2-p1' >{props.paragraph}</p>
   
   <Link style={{textDecoration:'none'}} to="/pricing"  className='home4-part2-btn1-44'> {props.btntext}</Link>
   </div>
   
   
   
    </div>
  )
}

export default Home4Call