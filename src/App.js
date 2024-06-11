// import Header from './Components/Header/Header.jsx'
// import Footer from './Components/Footer/Footer.jsx'
import Home from './Home.js';
import Home1 from './Components/Home1/Home1.jsx';
import Home2 from './Components/Home2/Home2.jsx';
import Home3 from './Components/Home3/Home3.jsx';
import Home4 from './Components/Home4/Home4.jsx';
import Home5 from './Components/Home5/Home5.jsx';
import Home6 from './Components/Home6/Home6.jsx';
import Home7 from './Components/Home7/Home7.jsx';
import Home8 from './Components/Home8/Home8.jsx';
import Home9 from './Components/Home9/Home9.jsx';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Sketch from './Components/Pages/DESIGNINTEGRATIONS/Sketch.jsx';
import SecurityOverview from './Components/Pages/SECURITY/SecurityOverview.jsx';
import Pricing from './Components/Pages/Pricing/Pricing.jsx';
import Fordesigner from './Components/Pages/ForDesigner/Fordesigner.jsx';
import ForDeveolper from './Components/Pages/ForDeveolper/ForDeveolper.jsx';
import ForProductManager from './Components/Pages/ForProductManager/ForProductManager.jsx';
import ForComplianceManager from './Components/Pages/ForComplianceManager/ForComplianceManager.jsx';
import PrivacyPolicy from './Components/Pages/Comapny/Privacypolicy.jsx';
import StarkFramework from './Components/Pages/Comapny/StarkFramework.jsx';
import CodeOfConduct from './Components/Pages/Comapny/CodeOfConduct.jsx';
import TermsOfServices from './Components/Pages/Comapny/TermsOfServices.jsx';
import {Routes,Route,  } from 'react-router-dom';
// import Test from './Test.js'

// import {UsecasesDropdown} from './Components/Pages/Pricing/Pricing.jsx'
function App() {
  return (
    <div className="App">
  <Routes> 
        <Route path="/"      element={<Home/>}  />
        <Route path="/home1" element={<Home1/>} />
        <Route path="/home2" element={<Home2/>} />
        <Route path="/home3" element={<Home3/>} />
        <Route path="/home4" element={<Home4/>} />
        <Route path="/home5" element={<Home5/>} />
        <Route path="/home6" element={<Home6/>} />
        <Route path="/home6" element={<Home6/>} />
        <Route path="/home7" element={<Home7/>} />
        <Route path="/home8" element={<Home8/>} />
        <Route path="/home9" element={<Home9/>} />
        <Route path="/securityoverview" element={<SecurityOverview/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/sketch" element={<Sketch/>} />   
        <Route path="/fordesigner" element={<Fordesigner/>} />   
        <Route path="/fordeveolper" element={<ForDeveolper/>} />   
        <Route path="/forproductmanager" element={<ForProductManager/>} />   
        <Route path="/forcompliancemanager" element={<ForComplianceManager/>} />   
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />   
        <Route path="/starkframework" element={<StarkFramework/>} />   
        <Route path="/codeofconduct" element={<CodeOfConduct/>} />   
        <Route path="/termsofservice" element={<TermsOfServices/>} />   
  </Routes>
         
{/* <Test/> */}





      
    </div>
  );
}

export default App;














