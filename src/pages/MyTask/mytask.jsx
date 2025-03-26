import React, { useEffect, useState } from 'react';
import './mytask.css';
import Menu from '../../components/Menu/Menu';
import Task from '../../components/Task/Task';
import { TiTick } from 'react-icons/ti';
import { MdDeleteSweep } from 'react-icons/md';

function Mytask() {
  const [taskValue, setTaskValue] = useState('')
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('task_list')) ?? [])
  const [comList, setComList] = useState(JSON.parse(localStorage.getItem('com_list')) ?? [])


  function onAddTaskClicked() {
    if (taskValue.trim() !== '') {
      addTaskToList();
    } else {
      console.log('');
    }
  }

  function addTaskToList() {
    const todoTask = {
      description: taskValue,
      isComplete: false,
    };
    let dupList = taskList
    dupList.push(todoTask)
    setTaskList(dupList)
    setTaskValue('')
    localStorage.setItem('task_list', JSON.stringify(taskList))
  }

  function onCompleteClicked(item, index) {
    let newList = [...taskList]
    newList.splice(index, 1)
    setTaskList(newList)
    localStorage.setItem('task_list', JSON.stringify(taskList))
    let comPage = comList
    comList.push(item)
    setComList(comPage)
    localStorage.setItem('com_list', JSON.stringify(comList))
  }

  function deleteTask(index) {
    // console.log(index)
    let dubList = [...taskList]
    dubList.splice(index, 1)
    setTaskList(dubList)
  }
  return (
    <div className="MenuContainer">
      <Menu />
      <div className="taskscreen">
        <div className="input-container">
          <input
            className="inputText"
            value={taskValue}
            placeholder={'Enter Your Task'}
            onChange={(e) => {
              setTaskValue(e.target.value);
            }}
          />
          <button onClick={onAddTaskClicked}>Add Task</button>
        </div>
        <div className='tasks'>
          {taskList.map((item, index) => (
              <Task
                title={item.description}
                rightIcon={
                  <TiTick
                    className="icon-tick"
                    onClick={() => onCompleteClicked(item, index)}
                  />}
                rightDelIcon={
                  <MdDeleteSweep
                    className="icon-delete"
                    onClick={() => deleteTask(index)}
                  />
                }
              />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Mytask;