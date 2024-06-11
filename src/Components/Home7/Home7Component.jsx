import React from 'react'

const Home7Component = (props) => {
  return (
    <div className='Home7Components'>

    <img className='Home7Components-img' height="100px" width="100px" src={require( `./Home7-${props.img}.png`)}></img>
    <h3>{props.h3}</h3>
    <p>{props.para}</p>


    </div>
  )
}

export default Home7Component