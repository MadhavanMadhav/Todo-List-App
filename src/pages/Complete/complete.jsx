import React from 'react'
import './complete.css'
import Menu from '../../components/Menu/Menu'
import Task from '../../components/Task/Task'


function Complete() {
  return (
    <div className='completeContainer'>
      <Menu />
      <div className='complete-screen'>
          <Task />
        </div>
      </div>
  )
}

export default Complete