import React from 'react';
export default function Facts(props){
  return(
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className = "main-container-header">Fun facts about React</h1>
      <ul className = "main-container-list">
        <li className = "main-container-list-item">Was first released in 2013</li>
        <li className = "main-container-list-item">Was originally created by Jordan Walke</li>
        <li className = "main-container-list-item">Has well over 100k stars on GitHub</li>
        <li className = "main-container-list-item">Is maintained by Facebook</li>
        <li className = "main-container-list-item">Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
  }