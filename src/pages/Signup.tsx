import "./index.css"
import { ChangeEvent, FormEvent, useState } from 'react'
import { supabase } from '../config/supabase'
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const navigate = useNavigate()
    const [email, set_email] = useState("")
    const [password, set_password] = useState("")

    const signup = async (e: FormEvent) => {
        e?.preventDefault()
        if (!email || !password) {
            alert("email and password are required")
            return
        }
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if (error) {
            alert(error)
        } else if (data) {
            alert("Signup successfully")
            navigate("/login")
        }

    }

    return (
        <form className="signup-form" onSubmit={signup}>
            <h2>Signup</h2>
            <input type="text" placeholder='email' onChange={(e: ChangeEvent<HTMLInputElement>) => set_email(e.target.value)} />
            <input type="password" placeholder='password' onChange={(e: ChangeEvent<HTMLInputElement>) => set_password(e.target.value)} />
            <button type='submit'>Signup</button>
            <a onClick={() => navigate("/login")}>Login</a>
        </form>
    )
}

export default Signup