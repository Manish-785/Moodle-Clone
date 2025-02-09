import './footer.css';
import { useState } from "react";
import speaker from "../assets/speaker.png";
import RotatingCards from '../rotatingcards/rotatingcards';
import Participants from '../Participants/Participants';

<<<<<<< Updated upstream
<<<<<<< Updated upstream
function Footer(){
    return(
        <div className='footercards'>
            <FooterCard className="fc1"name="Announcements"></FooterCard>
          <FooterCard className="fc2" name="Course Content"></FooterCard>
=======
=======
>>>>>>> Stashed changes
function Footer(props) {
    const [activeAnnouncement, setActiveAnnouncement] = useState(false);
    const [activeAssignment, setActiveAssignment] = useState(false);
    const [activeParticipant, setActiveParticipant] = useState(false);

    const toggleAnnouncement = () => {
        setActiveAnnouncement(!activeAnnouncement);
    }
    const toggleAssignment = () => {
        setActiveAssignment(!activeAssignment);
    }
    const toggleParticipant = () => {
        setActiveParticipant(!activeParticipant);
    }

    return (
        <div className="footer" style={{
            display:'flex',
            flexDirection:'column',
            marginLeft: props.isOpen ? '450px' : '0',
            transition: 'margin-left 0.3s ease-in-out',
            padding: '20px',
        }}>
            <p id="announcements" onClick={toggleAnnouncement} style={{
                zIndex:'2',
            }}>
                <img id="speaker" src={speaker} alt="speaker" />Announcements {activeAnnouncement ? "▲" : "▼"}
            </p>
            <p id="participants" onClick={toggleParticipant} style={{
                zIndex:'2',
            }}>
                Course Participants {activeParticipant ? "▲" : "▼"}
            </p>
            <p id="assignments" onClick={toggleAssignment} style={{
                zIndex:'2',
            }}>
                Assignments {activeAssignment ? "▲" : "▼"}
            </p>
            {activeAssignment && (
                <div className="assignment-content" >
                    <RotatingCards heading="Upcoming" />
                    <RotatingCards heading="Past Due"/>        
                </div>
            )}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        </div>
    );
}

export default Footer;
