import React from 'react'
import './Menu.css'
import { useNavigate } from 'react-router-dom'

function Menu() {
  const navigate = useNavigate()
  return (
    <div className='TodoList'>
      {/* <div className='todo-box'> */}
        <div className='menu-bar'>
          <label onClick={()=>navigate("/")}>My Task</label>
          <label onClick={()=>navigate("/complete")}>Completed</label>
        </div>
      </div>
    // </div>
  )
}

export default Menu