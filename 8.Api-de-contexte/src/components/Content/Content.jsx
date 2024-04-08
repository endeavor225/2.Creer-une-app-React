import React from 'react'
import "./Content.css"
import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeProvider'

export default function Content() {

    const {darkMode} = useContext(ThemeContext)

    return (
        <div className="container">
            <h1>You are in {darkMode ? "Dark" : "Light"} Mode.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ea numquam dolorem aut ipsam iste cum. Distinctio reiciendis labore magni saepe laboriosam dolore optio adipisci, fugiat aliquam tempore magnam quas consequatur modi explicabo in reprehenderit nostrum, natus aperiam corporis excepturi sequi libero placeat accusantium cum? Adipisci optio odio porro, ex nisi enim dolore ad sed praesentium maxime reprehenderit vero. Explicabo quisquam ducimus mollitia dolor magnam vero fugiat consequuntur nostrum aliquid repudiandae nam, perferendis dicta doloribus voluptatum non cumque iure assumenda molestias officiis voluptates culpa unde quo soluta. Maxime, quaerat. Dolorum voluptatibus consequatur, natus molestias sequi est sint perspiciatis ex laboriosam?</p>
        </div>
    )
}
