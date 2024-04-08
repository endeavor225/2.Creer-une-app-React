import useAPICall from "./hooks/useAPICall"
import spinner from "./spinner.svg"

export default function Container() {

    const {catData, error, loading} = useAPICall()

    let content
    if ((loading && !error)) content = <img src={spinner} alt="icon de chargement"/>
    else if (error) content = <p>Une erreur est survenue ...</p>
    else if (catData) content = <img src={catData[0].url} alt="photo de chat"/>

    return (
        <div>
        <h1>Photo de chats 🐾</h1>

        {content}

        {/* AUTRES METHODE D'AFFICHAGE */}
        
        {/* {(loading && !error) && <img src={spinner} alt="icon de chargement"/>}

        {error && <p>Une erreur est survenue ...</p>}

        {catData &&  <img src={catData[0].url} alt="photo de chat"/>} */}

        </div>
    )
}
