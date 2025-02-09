import NavBar from './NavBar/NavBar.jsx'
import Header from './header/header.jsx'
import RotatingCards from './rotatingcards/rotatingcards.jsx'
import Footer from './footer/footer.jsx'
import Signup from './signup/signup.jsx'
import Landing from './landing/landing.jsx'
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js'
import Profile from './profile/profile.jsx'
import Navbar from "./Navbar";
import Rotatingcards from "./rotatingCards.jsx";
import Header2 from "./Header";
function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/"><Landing></Landing></Route>
        <Route exact path="/signup">
        <Signup></Signup>
        </Route>
        <Route exact path="/profile"><Profile></Profile></Route>
        <Route exact path="/plugin">
        <div>
        <Navbar></Navbar> 
        <Header2></Header2>
        <Rotatingcards></Rotatingcards> 
        </div>
        </Route>
        <Route exact path="/course">
          <div className="app">
          <NavBar isOpen={isOpen} toggleSideBar={toggleSideBar}></NavBar>
          <Header course="CS666" proff="Donald J. Trump" isOpen={isOpen}></Header>
          <RotatingCards isOpen={isOpen} heading="Recently Added"></RotatingCards>
          <Footer isOpen={isOpen}></Footer>
          </div>
        </Route>
     </Switch>
    </Router>
    // <div className='app'>
    //   {/* <NavBar></NavBar>
    //   <Header course="CS666"></Header>
    //  <RotatingCards></RotatingCards>
    //  <Footer></Footer>  */}
    //  {/* <Landing></Landing>  */}
    //  {/* <Signup></Signup>  */}
    //  <Profile name ="Darsh Maheshvari"></Profile> 
     
    // </div>
  )
  
}

export default App 