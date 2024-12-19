import "./index.css"
import { ChangeEvent, FormEvent, useState } from 'react'
import { supabase } from '../config/supabase'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [email, set_email] = useState("")
    const [password, set_password] = useState("")

    const login = async (e: FormEvent) => {
        e?.preventDefault()
        if (!email || !password) {
            alert("email and password are required")
            return
        }
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) {
            alert(error)
        } else if (data) {
            alert("login successfull")
            navigate("/")
        }

    }

    return (
        <form className="signup-form" onSubmit={login}>
            <h2>Login</h2>
            <input type="text" placeholder='email' onChange={(e: ChangeEvent<HTMLInputElement>) => set_email(e.target.value)} />
            <input type="password" placeholder='password' onChange={(e: ChangeEvent<HTMLInputElement>) => set_password(e.target.value)} />
            <button type='submit'>Login</button>
            <a onClick={() => navigate("/signup")}>Signup</a>
        </form>
    )
}

export default Login