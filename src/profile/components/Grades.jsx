import React, { useState } from "react";
import "./style.css";

const Grades = (props) => {
  const [selectedSemester, setSelectedSemester] = useState("Semester");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const semesters = ["Spring 2024", "Autumn 2023"];

  const handleSelect = (semester) => {
    setSelectedSemester(semester);
    setDropdownOpen(false);
  };

  return (
    <div id="grade-box">  

      <span id="dropdown">
        <button
          className="dropdown-btn"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        > 
          {selectedSemester}
        </button>
        {dropdownOpen && (
          <ul className="dropdown-menu">
            {semesters.map((semester) => (
              <li 
                key={semester}
                className="dropdown-item"
                onClick={() => handleSelect(semester)}
              > 
                {semester}
              </li>
            ))} 
          </ul>
        )}
      </span>

      <ul id="grade-list">
        <span id="course-name" className="grade-list">
          Course Name: {props.coursename}
        </span>
        <span id="grade" className="grade-list">
          Grade: {props.grades}
        </span>
        <span id="status" className="grade-list">
          Status : {props.status}
        </span>
        <span id="cpi" className="grade-list">
          CPI : {props.cpi}
        </span>
        <hr />
        <hr />
      </ul>
    </div> 
  );
};

export default Grades;
