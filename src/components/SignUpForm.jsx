import { useState } from "react";
import FormInput from "./FormInput";

export default function SignUpForm({ API_URL, token, setToken }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            if(username.length >= 8 && password.length >= 8) {
                setError(null)
                const response = await fetch(API_URL + "/signup", 
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                })
                const result = await response.json()
                await setToken(result.token)
            } else {
                setError("Username and Password must be at least 8 characters.")
            }
         } catch (error) {
            setError(error.message)
         }
    }

    return (
        <>
        <h2>Sign up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <FormInput value={username} valueSetter={setUsername} type="text" inputLabel="Username: " placeholder="Type in username." />
            <FormInput value={password} valueSetter={setPassword} type="password" inputLabel="Password: " placeholder="Type in password." />
            <FormInput type="submit" />
        </form>
        </>
    )
}