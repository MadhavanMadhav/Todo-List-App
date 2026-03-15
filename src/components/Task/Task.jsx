import React from "react";
import "./task.css";

function Task({ title, rightIcon, rightDelIcon }) {
  return (
    <div className="task-list">
      <div className="task-box">
        <p>{title}</p>

        <div className="icon">
          {rightIcon}
          {rightDelIcon}
        </div>
      </div>
    </div>
  );
}

export default Task;
