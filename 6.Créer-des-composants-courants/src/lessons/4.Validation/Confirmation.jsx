import React from 'react'

export default function Confirmation({inputState, setInputState, showValidation}) {
  return (
    <>
        <label 
            htmlFor="confirmation"
            className="text-slate-50 inline-block mt-5"
        >
            Confirmer votre mot de passe
        </label>

        <input 
            id="confirmation"
            type="password"
            className="rounded w-full p-1 mt-2"
            value={inputState.passwordConfirmation}
            onChange={e => setInputState({...inputState, passwordConfirmation : e.target.value})}
        />
        {showValidation.passwordConfirmation && (
            <p className="text-red-400 text-sm font-semibold">
                Les mots de passe ne sont pas identique.
            </p>
        )}
    </>
  )
}
