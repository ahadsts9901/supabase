import "./index.css"
import { useNavigate } from "react-router-dom"
import { supabase } from "../config/supabase"
import { useEffect, useState } from "react"
import { get_user } from "../App"
import Body from "./components/home/Body"

const Home = ({ set_global_user }: any) => {
    const navigate = useNavigate()
    const [user, set_user] = useState<any>(null)

    useEffect(() => {
        get_current_user()
    }, [])

    const get_current_user = async () => {
        const user = await get_user()
        set_user(user)
    }

    const logout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) {
            alert(error)
        } else {
            navigate("/login")
            set_global_user(null)
        }
    }

    return (
        <div className="main">
            <div className="header">
                <h3>{user?.email}</h3>
                <button onClick={logout}>Logout</button>
            </div>
            <Body user={user} />
        </div>
    )
}

export default Home