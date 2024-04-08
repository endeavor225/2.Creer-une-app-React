import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h1 className="text-4xl font-semibold text-center pt-10">Not found 404 🤖</h1>
        <div className="text-center">
            {/* <a href="/">Back to home page</a> */}

            <Link to={"/"}>
                Back to home page
            </Link>
        </div>
    </div>
  )
}
