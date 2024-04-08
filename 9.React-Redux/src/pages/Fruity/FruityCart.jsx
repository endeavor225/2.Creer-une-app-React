import {useSelector} from 'react-redux'

export default function FruityCard() {
    const fruitsCart = useSelector(state => state.fruitsCart)

    return (
        <div className="bg-slate-100 rounded">
            <p className="text-xl p-5 border-b border-slate-400">Your Fruity Cart</p>
            <ul>
                {fruitsCart.cart.length > 0 && 
                    fruitsCart.cart.map(fruit => 
                        <li key={fruit.id} className="px-5 py-2 text-xl">
                            <span className="font-semibold mr-2">{fruit.quantity} </span>
                            <span>{fruit.name}</span>
                        </li>
                    )
                }

                {fruitsCart.cart.length === 0 && 
                    <li className="px-5 py-2 text-xl font-semibold">... Grad one fruit !</li>
                }
            </ul>
            <p className="text-xl p-5 border-t border-slate-400">Total price : 
                {fruitsCart.cart.length > 0 && 
                    <span>{fruitsCart.cart.reduce((acc, item) => item.price * item.quantity + acc, 0)}$</span>
                }
            </p>
        </div>
    )
}
