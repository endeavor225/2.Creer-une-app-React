import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Bienvenu sur NotesMania</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat qui similique provident quia officia ratione est vitae, quae voluptatum, itaque optio enim sint voluptatibus atque ipsum accusamus praesentium in recusandae?</p>

      <button
      onClick={() => setDarkMode(!darkMode)}
      >Activer le {darkMode ? "Light mode" : "Dark mode"} </button>
    </div>
  )
}
