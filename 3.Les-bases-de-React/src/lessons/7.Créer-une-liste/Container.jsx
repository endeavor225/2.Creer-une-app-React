export default function Container() {

  const data = [
    {
      id: 1,
      name: "Abraham"
    },
    {
      id: 2,
      name: "Laurent"
    },
    {
      id: 3,
      name: "Luis"
    },
    {
      id: 4,
      name: "Jean"
    },
  ]
  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>

      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}