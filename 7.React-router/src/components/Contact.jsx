import { useLocation } from "react-router-dom" 

export default function Contact() {
    const data = useLocation()
    console.log(data)
  return (
    <div>
        <h1 className="text-4xl font-semibold text-center pt-10">Contact us. {data.state.txt} </h1>
    </div>
  )
}
