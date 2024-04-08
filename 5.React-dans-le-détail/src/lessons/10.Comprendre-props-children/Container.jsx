import Child from "./Child"

export default function Container() {

    return (
        <div>
            <h1>Props children</h1>
            <Child>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, doloremque,</p>
            </Child>
            <Child>
                <button>Valider</button>
            </Child>
            <Child>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </Child>
        </div>
    )
}
