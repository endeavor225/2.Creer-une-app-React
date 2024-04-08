import { useState } from "react"
import Card from "./Card"

export default function Container() {
  
  const [state, setState] = useState("hello world")
  const id = 1423
  return (
    <div>
      <h1>Les props</h1>
      <p>State du container: {state} </p>
      <Card id={id} state={state} changeState={setState} />

      {/* {Card({id})} */}
    </div>
  )
}
