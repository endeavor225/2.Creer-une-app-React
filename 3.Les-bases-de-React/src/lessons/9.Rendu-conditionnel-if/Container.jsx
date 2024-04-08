export default function Container() {

  const isLogged = true

  let content

  if (isLogged) content = "Bienvenu sur votre contenu"
  else content = "Veuillez-vous connecté"

  return (
    <div>
      <h1>Rendu conditionnel avec if</h1>
      <p>{content}</p>
    </div>
  )

  // Methode 1
  
  /* if(isLogged) {
    return (
      <div>
        <h1>Rendu conditionnel avec if</h1>
        <p>Vous êtes connecté</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Rendu conditionnel avec if</h1>
        <p>Vous n'êtes pas connecté</p>
      </div>
    )
  } */
}
