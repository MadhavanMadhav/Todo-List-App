import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mytask from './pages/MyTask/mytask'
import Complete from './pages/Complete/complete'

function App() {
  return (
    <div className='Container'>
      <Routes>
        <Route path='/' element={<Mytask />} />
        <Route path='/complete' element={<Complete />} />
      </Routes>
    </div>
  )
}

export default App