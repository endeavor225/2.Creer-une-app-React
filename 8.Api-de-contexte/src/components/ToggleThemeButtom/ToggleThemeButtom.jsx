import {} from 'react'
import "./ToggleThemeButtom.css"
import moon from "../../assets/moon.svg"
import sun from "../../assets/sun.svg"
import { ThemeContext } from '../../Context/ThemeProvider'
import { useContext } from 'react'

export default function ToggleThemeButtom() {

    const {toggleTheme, darkMode} = useContext(ThemeContext)

    return (
        <button 
            onClick={toggleTheme}
            className='toggle-theme-btn'
        >
            <span>Go {darkMode ? "Light" : "Dark"} </span>
            <img src={darkMode ? sun : moon} alt="toggle icon" />
        </button>
    )
}
