import { useRef, useState, useEffect } from "react"
import { nanoid } from "nanoid"
export default function DynamicRefSelection() {
    const [fruits, setFruits] = useState([
        {id: nanoid(8), value: "🥭"},
        {id: nanoid(8), value: "🍉"},
        {id: nanoid(8), value: "🍒"},
    ])

    function deleteFruit (id){
        setFruits(fruits.filter(fruit => fruit.id !== id))
    }

    function handleRefs (el) {
        if (el) fruitsRef.current.push(el);
        else fruitsRef.current.shift();
        console.log(fruitsRef);
    }

    const fruitsRef = useRef([])
    return (
        <div>
            <ul>
                {fruits.map(item => (
                    <li 
                        key={item.id}
                        onClick={() => deleteFruit(item.id)}
                        ref={handleRefs}
                    >
                        {item.value}
                    </li>
                ))}
            </ul>
            <button onClick={() => setFruits([...fruits, {id: nanoid(8), value: "🥕"}])}>Add Fruits</button>
        </div>
    )
}
