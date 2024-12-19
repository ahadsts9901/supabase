import "./App.css"
import { Navigate, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Storage from "./pages/Storage"
import { Fragment, useEffect, useState } from "react"
import { supabase } from "./config/supabase"

export const get_user = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

const App = () => {
  const [user, set_user] = useState<any>(null)
  const [loading, set_loading] = useState(false)

  useEffect(() => {
    get_current_user()
  }, [])

  const get_current_user = async () => {
    set_loading(true)
    const user = await get_user()
    set_loading(false)
    set_user(user)
  }

  return (
    <Fragment>
      {
        loading ? <div>Loading...</div> :
          <Routes>
            {
              user ?
                <Fragment>
                  <Route path="/" element={<Home set_global_user={set_user} />} />
                  <Route path="/photos" element={<Storage />} />
                  <Route path="*" element={<Navigate to="/" replace={true} />} />
                </Fragment> :
                <Fragment>
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login set_user={set_user} />} />
                  <Route path="*" element={<Navigate to="/login" replace={true} />} />
                </Fragment>
            }
          </Routes>

      }
    </Fragment>
  )
}

export default App