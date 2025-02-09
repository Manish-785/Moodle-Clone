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
<<<<<<< Updated upstream
=======
        {/* <div className="buttons" style={{zIndex: '2',}}>
            <button onClick={coursewebpage} id="course-btn">Course</button>
            <button onClick={gradeswebpage} id="grades-btn">Grades</button>
            <button onClick={participantswebpage} id="participants-btn">Participants</button>
            <button onClick={competencieswebpage} id="competencies-btn">Preferences</button>
            </div> */}
>>>>>>> Stashed changes
        </div>
    )
}

export default Header