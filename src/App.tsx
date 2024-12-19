import "./App.css"
import { Navigate, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"

const App = () => {

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/signup" replace={true} />} />
    </Routes>
  )
}

export default App