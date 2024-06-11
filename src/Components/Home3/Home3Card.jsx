import React from 'react'
import "../../Stylesheets/Home3.scss";
const Home3Card = (props) => {
  return (
    <div className='home3Card'>
   <img className='Home3Card-pic' height= '200px' width='200px' src={require(`./img-${props.logo}.png`)}></img> 
    <p className='Home3Card-p1'>{props.text}</p>
    <p className='Home3Card-p2'>{props.heading}</p>
    <p className='Home3Card-p3'>{props.paragraph}</p>
    
    </div>
  )
}

export default Home3Card