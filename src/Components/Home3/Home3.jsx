import React from 'react';
import "../../Stylesheets/Home3.scss";
import Home3Card from './Home3Card';
import Image1 from "./img-1.png"
import Image2 from "./img-2.png"
import Image3 from "./img-3.png"
import Image4 from "./img-4.png"
import { Link } from 'react-router-dom';
const Home3 = () => {
  return (
    <div className='home3'>
    
    <p className='home3-p1'>EXPLORE THE STARK PLATFORM</p>
    <span className='home3-p2'>The only</span>
    <span className='home3-p3'> end-to-end solution</span>
    <p className='home3-p4'>from design and code to live product</p>

    <div className='Ho3-Cards'>
<Home3Card 
// logo=<Image1/>
logo='1'
 text="SPEED UP DESIGN & DEV" 
 heading="Plug-ins & Integrations" 
 paragraph="Meet your team where they work, from Figma and Sketch to GitHub and their browser of choice. An accessibility workflow built right into the tools they love. No need for them to switch or relearn."
  />
<Home3Card 
// logo=<Image2/>
logo='2'
 text="IMPROVE COLLABORATION" 
 heading="Projects, Reports & Insights" 
 paragraph= "Manage your team’s accessibility workflow in the Stark Web app. Monitor and manage progress with real-time reports and insights across all your projects from design to code." 

  />
<Home3Card
//  logo=<Image3/>
logo='3'
 text="ACCELERATE WORKFLOWS" 
 heading="AI-powered Automation" 
 paragraph="Automated continuous scanning of design files and code repositories combined with AI-powered suggestions accelerates finding and fixing of accessibility issues in record time."
  />
<Home3Card 
// logo=<Image4/>
logo='4'
 text="MANAGE AT SCALE" 
 heading="Compliance Center" 
 paragraph="Manage your company’s accessibility posture in one central hub. Assign and document individual controls based on the regulatory frameworks. Access evidence for easy auditing."
  />
  </div>


<div className='Home3-btn'>

<Link style={{textDecoration:'none'}} to="pricing" className='home3-button'>  Get started for free</Link>
</div>




    </div>
  )
}

export default Home3