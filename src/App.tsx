import "./App.css"
import { Navigate, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { Fragment, useEffect, useState } from "react"
import { supabase } from "./config/supabase"

export const get_user = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

const App = () => {
  const [user, set_user] = useState<any>(null)

  useEffect(() => {
    const user = get_user()
    set_user(user)
  }, [])

  return (
    <Routes>
      {
        user ?
          <Fragment>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Fragment> :
          <Fragment>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace={true} />} />
          </Fragment>
      }
    </Routes>
  )
}

export default App