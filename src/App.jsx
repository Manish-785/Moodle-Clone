import NavBar from './NavBar/NavBar.jsx'
import Header from './header/header.jsx'
import RotatingCards from './rotatingcards/rotatingcards.jsx'
import Footer from './footer/footer.jsx'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js'
// import NavBar from './NavBar/NavBar.jsx'
// import Header from './header/header.jsx'
// import RotatingCards from './rotatingcards/rotatingcards.jsx'
// import Footer from './footer/footer.jsx'
// import Landing from './landing/landing.jsx'
// import Signup from './signup/signup.jsx'
import Profile from './profile/profile.jsx'

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/course">
          <div className='app'>
          <NavBar></NavBar>
          <Header course="CS666"></Header>
          <RotatingCards></RotatingCards>
          <Footer></Footer>
          </div>
        </Route>
     </Switch>
    </Router>
    <div className='app'>
      {/* <NavBar></NavBar>
      <Header course="CS666"></Header>
     <RotatingCards></RotatingCards>
     <Footer></Footer>  */}
     {/* <Landing></Landing>  */}
     {/* <Signup></Signup>  */}
     <Profile name ="Darsh Maheshvari"></Profile> 
     
    </div>
  )
  
}

export default App 