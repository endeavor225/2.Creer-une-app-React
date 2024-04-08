import {useParams} from 'react-router-dom';

export default function UserProfile() {
    const params = useParams()
    console.log(params)


    return (
        <div>
            <h1 className="text-4xl font-semibold text-center pt-10">Your prifile: {params.id} </h1>

        </div>
    )
}
