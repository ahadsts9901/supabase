import { useNavigate } from "react-router-dom"
import { supabase } from "../config/supabase"
import "./index.css"

const Home = () => {
    const navigate = useNavigate()

    const logout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) {
            alert(error)
        } else {
            alert("Logout successfull")
            navigate("/login")
        }
    }

    return (
        <div className="main">
            <div className="header">
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Home