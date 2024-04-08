import {useState} from 'react'
import Pseudo from './Pseudo'
import Password from './Password'
import Confirmation from './Confirmation'

export default function Validation() {
    const [inputState, setInputState] = useState({
        pseudo: "",
        password: "",
        passwordConfirmation: ""
    })
    const [showValidation, setShowValidation] = useState({
        pseudo: false,
        password: false,
        passwordConfirmation: false
    })

    function handlSubmit(e){
        e.preventDefault()

        if (validationCheck()) {
            console.log("Envoi du formulaire");
        }
    }

    function validationCheck(){
        const areValid = {
            pseudo: false,
            password: false,
            passwordConfirmation: false,
        }

        if (inputState.pseudo.length < 3 || inputState.pseudo.length > 64) {
            setShowValidation(state => ({...state, pseudo: true}))
        } else {
            areValid.pseudo = true
            setShowValidation(state => ({...state, pseudo: false}))
        }

        if (inputState.password.length < 6 || !/\d/.test(inputState.password)) {
            setShowValidation(state => ({...state, password: true}))
        } else {
            areValid.password = true
            setShowValidation(state => ({...state, password: false}))
        }

        if (inputState.passwordConfirmation !== inputState.password) {
            setShowValidation(state => ({...state, passwordConfirmation: true}))
        } else {
            areValid.passwordConfirmation = true
            setShowValidation(state => ({...state, passwordConfirmation: false}))
        }

        if (Object.values(areValid).every(value => value)) {
            return true
        }else {
            return false
        }
    }

    return (
        <form 
            onSubmit={handlSubmit}
            className="max-w-xl mx-auto border p-10 rounded"
        >
            <p className="text-slate-100 text-xl mb-6">
                Créer votre nom d'utilusateur et votre mot de passe
            </p>
            <Pseudo 
                inputState={inputState}
                setInputState={setInputState}
                showValidation={showValidation}
            />
            <Password 
                inputState={inputState}
                setInputState={setInputState}
                showValidation={showValidation}
            />
            <Confirmation 
                inputState={inputState}
                setInputState={setInputState}
                showValidation={showValidation}
            />
            <button className="mt-10 bg-slate-100 px-4 py-2 min-w-[125px] rounded">Valider</button>
        </form>
    )
}
