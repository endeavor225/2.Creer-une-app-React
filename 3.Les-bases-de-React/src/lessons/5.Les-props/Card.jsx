import React from 'react'

export default function Card({id, state, changeState}) {
    console.log(id, state);
  return (
    <div>
        <p>User: {id}</p>
        <p>State du parent: {state}</p>

        <button onClick={()=> changeState("Bonjour")}> Change le state</button>
    </div>
  )
}
