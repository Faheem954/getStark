import react from "react"
import { Link } from "react-router-dom";
import "./Navbar2.scss"
const UsecasesDropDown2=()=>{
    return(
    <div className='UsecaseDropdown2 '>
  <div height="220px" width="30%" className="UsecaseDropdown2-Element1">
  <img height="150px" width="100%" src="https://res.cloudinary.com/stark-lab/image/upload/v1711412084/medium_Header_60a6fb72ce.png"/>
  <p className='UsecaseDropdown2Element1-p'>Introducing Sidekick V2 and Stark Premium to boost your design and development workflow</p>
  <Link  style={{textDecoration:"none"}}><p className='UsecaseDropdown2Element1-link'>Read More on the Blog</p></Link>
  </div>
  
  <div className="UsecaseDropdown2-Element2">
  <div className="UsecaseDropdown2ElementSet">
  <Link style={{textDecoration:"none"}}>
    <p className='UsecaseDropdown2-h1'>Blog</p>
    <p className='UsecaseDropdown2-p'>Read about the latest updates to Stark and articles from our team.</p>
   </Link>
  </div>
  <div className="UsecaseDropdown2ElementSet">
  <Link style={{textDecoration:"none"}}>
    <p className='UsecaseDropdown2-h1'>Library</p>
    <p className='UsecaseDropdown2-p'>Learn about all the avaliable things accessibility and inclusive design.</p>
   </Link>
  </div>
  <div className="UsecaseDropdown2ElementSet">
  <Link style={{textDecoration:"none"}}>
    <p className='UsecaseDropdown2-h1'>The WCAG Explained</p>
    <p className='UsecaseDropdown2-p'>Simple explanations of every WCAG criteria.</p>
   </Link>
  </div>
  </div>
  
  <div className="UsecaseDropdown2-Element3">
  
  <div className="UsecaseDropdown2ElementSet">
  <Link style={{textDecoration:"none"}}>
    <p className='UsecaseDropdown2-h1'>Support Center</p>
    <p className='UsecaseDropdown2-p'>Find answers of questions & tips and tricks on how to use Stark.</p>
   </Link></div>
  
  <div className="UsecaseDropdown2ElementSet">
  <Link style={{textDecoration:"none"}}>
    <p className='UsecaseDropdown2-h1'>Community</p>
    <p className='UsecaseDropdown2-p'>Join more than 3,500 accessibility folks from around the world.</p>
   </Link></div>
  
  <div className="UsecaseDropdown2ElementSet">
  <Link style={{textDecoration:"none"}}>
    <p className='UsecaseDropdown2-h1'>Stark White Paper</p>
    <p className='UsecaseDropdown2-p'>Managing and growing your accessibility posture at any scale.</p>
   </Link></div>
  
  
  </div>
    </div>)
  }
  export default  UsecasesDropDown2;