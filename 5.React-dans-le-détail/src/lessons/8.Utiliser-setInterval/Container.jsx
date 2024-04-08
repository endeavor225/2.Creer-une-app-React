import { useState, useEffect } from "react"

export default function Container() {

    const [count, setCount] = useState(0)

    useEffect(() =>{
        const intervalID = setInterval(() =>{
            setCount(curr => curr +1)
        }, 1000)

        return () => clearInterval(intervalID)
    }, [])
  
    return (
        <div>
        <h1>Valeur du compteur : {count}</h1>
        </div>
    )
}
