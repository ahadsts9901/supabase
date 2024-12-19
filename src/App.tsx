import "./App.css"
import { Navigate, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

const App = () => {

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace={true} />} />
    </Routes>
  )
}

export default App