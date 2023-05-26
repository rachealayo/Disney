import React from "react";
import Home from "./Disney/Home/home";
import Header from "./Disney/Header/header";


const App = () => {
  return(
  //  <BrowserRouter>
  //      <Header/>
  //       <Home/> 
  //        <Routes>
  //          <Route path="/" element={<Home/>}/>
  //          <Route path="/About" element={<About/>}/>
  //          <Route path="/Contact" element={<Contact/>}/>
  //          <Route path="/Gallery" element={<Gallery/>}/>
  //        </Routes>

  //   </BrowserRouter>
     <div>
      <Header/>
      <Home/>
     </div> 
    
  )
};

export default App;