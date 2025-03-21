import React from 'react'
import './mytask.css'
import Menu from '../../components/Menu/Menu'
import Task from '../../components/Task/Task'
import { TiTick } from "react-icons/ti";
import { MdDeleteSweep } from "react-icons/md";
import { useEffect, useState } from 'react';

function Mytask() {

  const [taskValue, setTaskValu] = useState("")

  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('task_list')))

  function onAddTaskClicked() {
    console.log("ADD TASK CLICKED")
    if (taskValue !== "") {
      console.log(taskValue)
      addTaskToList()
    } else {
      console.log("empty")
    }
  }

  function addTaskToList() {
    let todoTask = {
      description: taskValue,
      isComplete: false
    }
    let dupList = taskList
    dupList.push(todoTask)
    console.log(dupList, "DUP")
    setTaskList(dupList)
    setTaskValu("")
    localStorage.setItem('task_list',JSON.stringify(taskList))

  }
  return (
    <div className='MenuContainer'>
      <Menu />
      <div className='taskscreen'>
        <div className='input-container'>
          <input className={'inputText'} value={taskValue} placeholder={'Enter Your Task'} onChange={(e) => { setTaskValu(e.target.value) }} />
          <button onClick={onAddTaskClicked}>Add Task</button>
        </div>
        <div className={'tasks'}>

          {taskList.map((item, index) => {
            return (
              <Task
                title={item.description}
                rightIcon={<TiTick className='icon-tick' />}
                rightDelIcon={<MdDeleteSweep className='icon-delete' />}
              />
            )
          })}
        </div>

      </div>
    </div>

  )
}

export default Mytask