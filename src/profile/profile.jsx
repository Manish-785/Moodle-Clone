import { useState, useEffect } from "react";
import "./profile.css";
import About from "./components/About";
import Grades from "./components/Grades";
import Setting from "./components/Setting";

function App(props) {
  const [activeComponent, setActiveComponent] = useState("About");

  useEffect(() => {
    setTimeout(() => {
      if (activeComponent === "About") {
        document.getElementById('about-btn').click();
      }
    }, 1);
  }, []); 
  

  const handleToggle = (component) => {
    setActiveComponent(component);
  };

  return (
    <div id="body-container">
      <div id="left-container">
        <div id="left-child-container">
          <img
            src="/assets/NicePng_power-symbol-png_1641315 1.png"
            alt="iitb-logo"
            id="iitb-logo"
          />
          
        </div>
      </div>
      <div id="right-container">
        <div id="student-info">
          <img
            src="/assets/Vector.png"
            alt="Profile"
            id="profile-photo"
          />
          <img src="\assets\Group.png" alt="grouppic" id="group-png"/>
        </div>
        <div id="middle-container">
          <button
            onClick={() => handleToggle("About")}
            id="about-btn"
            className={`btns ${activeComponent === "About" ? "active" : ""}`}
          >
            <span>About</span>
          </button>
          <button
            onClick={() => handleToggle("Grades")}
            id="grade-btn"
            className={`btns ${activeComponent === "Grades" ? "active" : ""}`}
          >
            <span>Grades</span>
          </button>
          <button
            onClick={() => handleToggle("Setting")}
            id="setting-btn"
            className={`btns ${activeComponent === "Setting" ? "active" : ""}`}
          >
            <span>Settings</span>
          </button>
          <span id="profile-name">{props.name}</span>
        </div>
        <div id="bottom-container">
          {activeComponent === "About" && (
            <About
              rollnumber="24B6969"
              year="3"
              department="Civil Engineering"
            />
          )}  
          {activeComponent === "Grades" && <Grades coursename="MA105" grades="AA" status ="status" cpi="10" />}
          {activeComponent === 'Setting' && <Setting/>}
        </div>
      </div>
    </div>
  );
}

export default App;  