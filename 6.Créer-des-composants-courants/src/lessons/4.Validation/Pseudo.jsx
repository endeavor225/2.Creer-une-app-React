import React from 'react'

export default function Pseudo({inputState, setInputState, showValidation}) {
    return (
        <>
            <label 
                htmlFor="userName"
                className="text-slate-50"
            >
                Votre pseudo (3-64 caractères)
            </label>

            <input 
                id="userName"
                type="text"
                className="rounded w-full p-1 mt-2"
                value={inputState.pseudo}
                onChange={e => setInputState({...inputState, pseudo : e.target.value})}
            />

            {showValidation.pseudo && (
                <p className="text-red-400 text-sm font-semibold">
                    Votre pseudo doit contenir entre 3 et 64 caractères.
                </p>
            )}
        </>
    )
}
