import './Participants.css'

function Participants(){
    const studentName=["Person 1", "Person 2", "Person 3"];
    return(<div className="ParticipantsList">
        <p className="heading1">&nbsp;First Name / Last Name</p>
        <ul>
            {studentName.map((items, index) =>(
                <li className="NameList" key ={index}>{items}</li>
            ))}
        </ul>
        </div>
    )
}

export default Participants