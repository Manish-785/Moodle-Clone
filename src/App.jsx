import NavBar from './NavBar/NavBar.jsx'
import Header from './header/header.jsx'
import RotatingCards from './rotatingcards/rotatingcards.jsx'
import Footer from './footer/footer.jsx'

function App() {
  return(
    <div className='app'>
      <NavBar></NavBar>
      <Header course="CS666"></Header>
     <RotatingCards></RotatingCards>
     <Footer></Footer>
    </div>
  )
  
}

export default App
