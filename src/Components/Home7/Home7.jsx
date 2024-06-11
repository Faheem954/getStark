import React from 'react'
import "../../Stylesheets/Home7.css"
import Home7Component from "./Home7Component"
const Home7 = () => {
  return (
    <div className='home7'> 

    <div className='home7-a'>
    <p>WHY STARK?</p>
    <h2>Build and ship inclusive software, accelerate time-to-compliance.</h2>
    <div className='home7-b'>
<Home7Component
img="1"
h3="Increase Velocity"
para="Stark is the only end-to-end platform that helps your team find and fix accessibility issues from design and code to the live product. All this, while being up to 10x faster than any other tool in the market." 
/>
<Home7Component
img="2"
h3="Accelerate Compliance"
para="Reports and Insights are available in real-time for every project in Stark. Plus, time-stamped historic reports are available at any time for up-to-date compliance reporting across departments."
/>
<Home7Component
img="3"
h3="Reduce Cost"
para="Stark’s fully integrated solution enables fixing of accessibility issues as early as first design drafts, reducing 56% of issues that typically make it into code where remediation costs can be up 100x higher."
/>
<Home7Component
img="4"
h3="Mitigate Risk"
para="The entire Stark platform and all our integrations are built with enterprise-grade security. From SSO and our fully SOC2-certified platform stack to our zero-trust policy that underpins all our tool ."
/>


</div>
</div>

    </div>
  )
}

export default Home7