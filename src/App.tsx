import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Metalens from './pages/Metalens'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/metalens" element={<Metalens />} />
    </Routes>
  )
}

