/* 1. Toujours exécuter les Hooks au plus haut niveau de la fonction.
Ne pas coder d'appels de Hooks dans des conditions, des boucles, etc...

2. Toujours exécuter les Hooks dans un composant ou un hook personnalisé, afin de garder la logique dans un environnement React.
*/

import { useState } from "react"
export default function Container() { 

    const [s1, setS1] = useState(0)

    return (
        <div>
        <h1>Les règles des Hooks</h1>

        </div>
    )
}
