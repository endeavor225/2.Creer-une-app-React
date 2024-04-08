import React from 'react'

export default function Password({inputState, setInputState, showValidation}) {
  return (
    <>
        <label 
            htmlFor="password"
            className="text-slate-50 inline-block mt-5"
        >
            Votre mot de passe : Au moins un chiffre et 6 caractères
        </label>

        <input 
            id="password"
            type="password"
            className="rounded w-full p-1 mt-2"
            value={inputState.password}
            onChange={e => setInputState({...inputState, password : e.target.value})}
        />

            {showValidation.password && (
                <p className="text-red-400 text-sm font-semibold">
                    Au moins 1 chiffre et 6 caractères.
                </p>
            )}
    </>
  )
}
