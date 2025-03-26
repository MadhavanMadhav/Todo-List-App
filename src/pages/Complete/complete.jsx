import React, { useState } from 'react'
import './complete.css'
import Menu from '../../components/Menu/Menu'
import Task from '../../components/Task/Task'

function Complete(props) {
  // const{item}=props
  const [comList, setComList] = useState(JSON.parse(localStorage.getItem('com_list')) ??[])

  return (
    <div className='completeContainer'>
      <Menu />
      <div className='complete-screen'>
        {comList.map((item, index) => (
          <Task
            title={item.description} />
        )
        )}

      </div>
    </div>
  )
}

export default Complete