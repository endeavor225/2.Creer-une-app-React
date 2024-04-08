import { useReducer } from "react"

export default function Container() {
    const [count, countDispatch] = useReducer(reducer, 0)

    function reducer (state, action) {
        switch (action.type) {
            case "increment":
                return state + 1
            case "decrement":
                return state - 1
            case "multiply":
                return state * 10
            case "devide":
                return state / 10
        }
    }

    return <div>
        <h1>Valeur du compteur : {count} </h1>

        <button onClick={()=> countDispatch({type: "increment", payload: 5})}>Incrémenter</button>
        <button onClick={()=> countDispatch({type: "decrement"})}>Décrémenter</button>
        <button onClick={()=> countDispatch({type: "multiply"})}>Multiplier par 10</button>
        <button onClick={()=> countDispatch({type: "devide"})}>Diviser par 10</button>
    </div>
}
