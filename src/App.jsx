import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import YesButton from './component/YesButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>

     <Routes>
<Route path='/' element={<Home />}></Route>
<Route path='/yes' element={<YesButton />}></Route>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
