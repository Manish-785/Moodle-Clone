import './header.css'

function Header(props){
    const coursewebpage=() => {
        window.location.href="";
    }
    const gradeswebpage=() => {
        window.location.href="/grades";
    }
    const participantswebpage=() => {
        window.location.href="#participants";
    }
    const competencieswebpage=() => {
        window.location.href="/preferences";
    }
    return(<div className='header' style={{
        marginLeft: props.isOpen ? '250px' : '0',
        transition: 'margin-left 0.3s ease-in-out',
        padding: '20px',
      }}> 
      <img src={bgi} id="bgi"/>
        <h1 id="course" style={{zIndex:'2',}}>{props.course}</h1>
        <h2 id="proff" style={{zIndex: '2'}}>{props.proff}</h2>
        </div>
    )
}

export default Header