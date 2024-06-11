import React, { useState } from 'react';
import "../../Stylesheets/Home9.css"
const a1 = ""
const ParentComponent = () => {
 
  const [imageUrl, setImageUrl] = useState("https://images.getstark.co/marketing/features/workflow-designer.webp?updatedAt=1697384167702"); // State variable to hold the image URL

  // Function to handle hover events and update the image URL
  const handleHover = (newImageUrl) => {
    setImageUrl(newImageUrl);
  };

  return (
   

    <div style={{marginTop:'-60%',marginLeft:"-31%",marginBottom:'6.9%', height:'800px',width:"120%", display:'flex'}}>
      {/* Display the image */}
      {imageUrl && <img  style={{marginLeft:'-10%'}} height='100%' width='100%' src={imageUrl} alt="Hovered image" />}
<div style={{display:'inline-block',marginLeft:"-90px",backgroundColor:'#faf5ff',borderRadius:"7px" ,padding:"5px",width:"40%",height:'900px',paddingRight:'5px',marginTop:'-90px'}}>
<p style={{textAlign:'center'}}>STREAMLINING WORKFLOWS, CONSOLIDATING TOOLS</p>
<h2 style={{textAlign:'center'}}>We scale with you<h2 className='Home9-home-h2-1'> <h2 className='Home9-home-h2-2'> across departments </h2></h2></h2>
      {/* Child components that respond to hover */}
      <ChildComponent 
       imageUrl='https://images.getstark.co/marketing/features/workflow-designer.webp?updatedAt=1697384167702'
       h2="designers"
       p="Create accessible designs in record time right in Figma, Sketch, and Adobe XD."  
       onHover={handleHover} />
       <ChildComponent 
       imageUrl='https://images.getstark.co/marketing/features/workflow-developer.webp?updatedAt=1697384167702'
       h2="Deveolpers"
       p="Test and audit your code from early implementation to live product."
       onHover={handleHover} />

       <ChildComponent 
      imageUrl='https://images.getstark.co/marketing/features/workflow-pm-2.webp'
       h2="Product Managers"
       p="Manage accessibility in real-time across all your projects.."  
       onHover={handleHover} />

      <ChildComponent 
      imageUrl='https://images.getstark.co/marketing/features/workflow-compliance.webp?updatedAt=1697384167702'
      h2="Compliance Managers"
      p="Monitor, manage and audit your accessibility posture in one place."
       onHover={handleHover} />
      {/* <ChildComponent imageUrl="image3.jpg" onHover={handleHover} /> */}

</div>
        </div>
  );
};

const ChildComponent = ({ imageUrl, onHover,p,h2, }) => {
  return (
    <div className='ChildComponent-div' style={{margin:'3%',marginTop:'11%',padding:'2px',borderRadius:'20px'}}
      onMouseEnter={() => onHover(imageUrl)} // Call onHover with imageUrl on mouse enter
      onMouseLeave={() => onHover(imageUrl)} // Clear imageUrl on mouse leave
    >
    <h2 className='ChildComponent-div-h1' style={{color:'#381FD1',textAlign:'center'}}>{h2}</h2>
    <p className='ChildComponent-div-p1' style={{color:'#10284b',textAlign:'center'}}>{p}</p>
      {/* <img src={imageUrl} alt="Child component" style={{ width: '100%', height: '100%' }} /> */}
    </div>
  );
};

export default ParentComponent;













// import React, { useState } from 'react';
// // import I1 from './Home9-1.webp'
// // import I2 from './Home9-2.webp'
// // import I3 from './Home9-3.webp'
// // import I4 from './Home9-4.webp'
// let I1 = './Home9-1.webp'
// let I2 = './Home9-2.webp'
// let I3 = './Home9-3.webp'
// let I4 = './Home9-4.webp'


// const ImageComponent = () => {
//   const [imageUrl, setImageUrl] = useState(I1); // State variable to hold the image URL

//   // Function to handle changes in the input field
//   const handleInputChange = (event) => {
//     setImageUrl(event.target.value); // Update the state with the new image URL
//   };

//   return (
//     <div>
//       {/* Input field to enter the image URL */}
//       <div
//         type="text"
//         placeholder="Enter image URL"
//         onMouseEnter={()=>{ handleInputChange(I2)}}
//         // onChange={handleInputChange}
//       >
//       value
//       </div>

//       {/* Display the image */}
//       {imageUrl && <img height="50%" width="50%" src={imageUrl} alt="User entered" />}
//     </div>
//   );
// };

// export default ImageComponent;















// import React,{useState} from 'react'


// const Home9 = () => {
//   const {imgs ,setImg} = useState(require('./Home9-1.webp'))
//   function Change(){
//   setImg(require('./Home9-2.webp'))
//   }
//   return (
//     <div>
//     <img style={{border:"1px solid red"}} height='50%' width= '100%' src={imgs}/> 
//     Home9
//     <h1 onMouseEnter={()=>{Change()}}>change2</h1>
//     </div>
//   )
// }

// export default Home9