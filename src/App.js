import React from "react"
import Navbar from "./Navbar"
import Facts from "./Facts"

export default function App(){
    const [dark, setDark] = React.useState(false)

    return(
        <div className = "new-page-container">
            <Navbar darkMode = {dark} toggleDarkMode = {() => {
                setDark(prevDark => !prevDark)
            }}/>
            <Facts darkMode = {dark}/>
        </div>
    )
}