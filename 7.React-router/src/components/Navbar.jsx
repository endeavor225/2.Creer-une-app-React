import {Link, NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="p-2 text-center bg-stone-300">
        <NavLink 
            to={"/"} 
            /* className={({isActive}) => `${isActive && "bg-red-600"} mx-2 text-md font-semibold`} */
            className="mx-2 text-md font-semibold"
        >
            Home
        </NavLink>
        <Link 
            to={"/analytics"} 
            className="mx-2 text-md font-semibold">
            Analytics
        </Link>
        <Link 
            state={{txt: "State"}}
            to={"/contact"} 
            className="mx-2 text-md font-semibold">
            Contact
        </Link>
    </nav>
  )
}
