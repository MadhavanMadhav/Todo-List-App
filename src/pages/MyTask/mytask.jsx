import React, { useState } from "react";
import "./mytask.css";
import Menu from "../../components/Menu/Menu";
import Task from "../../components/Task/Task";

import { TiTick } from "react-icons/ti";
import { MdDeleteSweep } from "react-icons/md";

function Mytask() {
  const [taskValue, setTaskValue] = useState("");

  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("task_list")) ?? [],
  );

  const [comList, setComList] = useState(
    JSON.parse(localStorage.getItem("com_list")) ?? [],
  );

  function addTask() {
    if (taskValue.trim() === "") return;

    const newTask = {
      description: taskValue,
    };

    const newList = [...taskList, newTask];

    setTaskList(newList);
    localStorage.setItem("task_list", JSON.stringify(newList));

    setTaskValue("");
  }

  function completeTask(item, index) {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);

    setTaskList(newTaskList);
    localStorage.setItem("task_list", JSON.stringify(newTaskList));

    const newComList = [...comList, item];

    setComList(newComList);
    localStorage.setItem("com_list", JSON.stringify(newComList));
  }

  function deleteTask(index) {
    const newList = [...taskList];
    newList.splice(index, 1);

    setTaskList(newList);
    localStorage.setItem("task_list", JSON.stringify(newList));
  }

  return (
    <div className="MenuContainer">
      <Menu />

      <div className="taskscreen">
        <div className="input-container">
          <input
            value={taskValue}
            placeholder="Enter Task..."
            onChange={(e) => setTaskValue(e.target.value)}
          />

          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="tasks">
          {taskList.map((item, index) => (
            <Task
              key={index}
              title={item.description}
              rightIcon={
                <TiTick
                  className="icon-tick"
                  onClick={() => completeTask(item, index)}
                />
              }
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
