import { useState, useRef } from "react"
import "./Container.css"

export default function Container() {

  const [state, setState] = useState("")

  function handleInput(e){
    setState(e.target.value)
  }

  const emailRef = useRef()

  function handleSubmit(e){
    e.preventDefault()

    console.log(state);
    console.log(emailRef.current.value)
  }

  return (
    <div>
      <h1> Controlled vs uncontrolled input</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Votre pseudo</label>
        <input
          onChange={handleInput}
          value={state}
          type="text"
          id="name"
        />
        {/* {!state && <p>Veuillez remplir cet input</p>} */}

        <label htmlFor="email">Votre email</label>
        <input
          ref={emailRef}
          type="text"
          id="email"
        />

        <button>Envoyer</button>
      </form>

      <p>Votre pseudo: {state}</p>
    </div>
  )
}
