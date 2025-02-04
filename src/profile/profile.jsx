import { useState } from 'react';
import './profile.css';
import About from './components/About';
import Grades from './components/Grades';
// import Settings from './components/Settings';

function App(props) {
  const [activeComponent, setActiveComponent] = useState('About');

  const handleToggle = (component) => {
    setActiveComponent(component);

  };

  return (
    <div id="body-container">
      <div id="left-container"></div>
      <div id="right-container">
        <div id="student-info">
          <img
            src="D:/devcom/Moodle-Clone/src/assets/Vector.png"
            alt="Profile"
            id="profile-photo"
            />
        </div>
        <div id="middle-container">
          <button onClick={() => handleToggle('About')} id="about-btn" className='btns'>
          <span>About </span>
          </button>
          <button onClick={() => handleToggle('Grades')} id="grade-btn" className='btns'> 
          <span>Grades </span>
          </button>
          <button onClick={() => handleToggle('Settings')} id="setting-btn" className='btns'>
          <span>Settings </span>
          </button>
        <span id="profile-name">{props.name}</span>

        </div>
          <div id='bottom-container'>
            {activeComponent === 'About' && (
              <About
                rollnumber="24B6969"
                year="3"
                department="Civil Engineering"                
              />
            )}
            {activeComponent === 'Grades' && <Grades />}
            {/* {activeComponent === 'Settings' && <Settings />} */}
        </div>
      </div>
    </div>
  );
}

export default App;
