import React from "react"
import "../../Stylesheets/Home9.css"
const ImgShow=(props)=>{
    return(
  <div>
  <img height="200px" width="100px" src={require(`./Home9-${props.a}.webp`) } />
  </div>
    )
  }
  export default ImgShow
  