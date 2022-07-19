import React from 'react'

export default function Navbar(props){
    return(
        <nav className={props.darkMode ? "dark": ""}>
            <div className = "navigation-bar-container1">
                <figure className = "navigation-bar-image">
                    <img className = "navigation-bar-main_img" alt = "React Logo" src = "https://www.clipartkey.com/mpngs/m/300-3002439_react-native-icon-png-clipart-png-download-react.png"></img>
                </figure>
                <h2 className = "navigation-bar-header">ReactFacts</h2>
            </div>
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}