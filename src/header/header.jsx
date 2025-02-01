import './header.css'

function Header(props){
    const coursewebpage=() => {
        window.location.href="";
    }
    const gradeswebpage=() => {
        window.location.href="#grades";
    }
    const participantswebpage=() => {
        window.location.href="#participants";
    }
    const competencieswebpage=() => {
        window.location.href="#competenices";
    }

    return(<div className='header'>        
        <h1 id="course">{props.course}</h1>
        <div className="buttons">
            <button onClick={coursewebpage} id="course-btn">Course</button>
            <button onClick={gradeswebpage} id="grades-btn">Grades</button>
            <button onClick={participantswebpage} id="participants-btn">Participants</button>
            <button onClick={competencieswebpage} id="competencies-btn">Competencies</button>
            </div>
        </div>
    )
}

export default Header