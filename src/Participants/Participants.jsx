import './Participants.css'

function Participants(){
    const studentName=["Person 1", "Person 2", "Person 3"];
    return(<div className="ParticipantsList">
        <div className="name">
            <p id="nameheading">Name</p>
        <ul>
            {studentName.map((items, index) =>(
                <li className="NameList" key ={index}>{items}</li>
            ))}
        </ul>
        </div>
        </div>
    )
}

export default Participants