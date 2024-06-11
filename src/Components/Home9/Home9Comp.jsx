import React,{useState} from 'react'
import "../../Stylesheets/Home9.css"
const Home9Comp = (props) => {
  
  return (
    <div className='Home9Comp' style={{border:"2px solid green"}}>
    {/* <img className='home9-img1' height="100%" width="50%" 
    src ={Show }
    // onMouseEnter = SetHover(true);
    ></img> */}
<a className="" href="/for-designers" onMouseEnter={Show}>
<h4 className="">{props.h4}</h4>
<p className="">{props.paragraph}</p></a>
    {/* </div> */}
    </div> 
  )
}

export default Home9Comp