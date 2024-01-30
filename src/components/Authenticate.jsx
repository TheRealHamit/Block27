import { useState } from "react";
import FormInput from "./FormInput";

export default function Authenticate({ API_URL, token, setToken }) {
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    async function handleClick(e) {
        e.preventDefault()
        try {
            if (token) {
                setError(null)
                const response = await fetch(API_URL + "/authenticate",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                const result = await response.json()
                setSuccess(result)
            } else {
                setError("Please log in or sign up.")
            }
        } catch(error) {
            setError(error.message)
        }
    }
    return (
        <>
        <h2>Authenticate</h2>
        {error && <p>{error}</p>}
        {success && success.success && <p>Success: {success.message}</p>}
        {success && !success.success && <p>{success.name}: {success.message}</p>}
        <FormInput type="button" value="Authenticate Token" onClick={(e) => {handleClick(e)}}/>
        </>
    )
}