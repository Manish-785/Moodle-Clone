import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './NavBar.css'
import Card from './cards.jsx'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    }

    const elements=["Item 1", "Item 2", "Item 3"];
    return(
        <div>
            <div className="hamburger" onClick={toggleSideBar} >
                <FaBars size={24} />
            </div>
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
<<<<<<< Updated upstream
=======
                <div>
                    <img id="logo" src={logo} alt="logo"/>
                    <p id="name">&nbsp;&nbsp;IITB<br></br>
                    MOODLE</p>
                </div>
                <div className="nav-bar-content">
                    <a id="preferences" href="/preferences">Preferences</a>
                    <a id="grades" href="/grades">Grades</a>
                </div>
                    <img id="user" src={user} alt="user"/>
>>>>>>> Stashed changes
                 <div className="closebutton" onClick={toggleSideBar}>
                   <FaTimes size={24} />
                </div>
                <Card name="General" element="Announcements"></Card>
                <Card name="6 January - 12 January" element={elements}></Card>
                <Card name="13 January - 19 January"></Card>
                <Card name="20 January - 26 January"></Card>
                <Card name="27 January - 2 February"></Card>
            </div>
        </div>
    )
}

export default NavBar