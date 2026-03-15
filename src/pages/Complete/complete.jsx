import React, { useState } from "react";
import "./complete.css";
import Menu from "../../components/Menu/Menu";
import Task from "../../components/Task/Task";

function Complete() {
  const [comList, setComList] = useState(
    JSON.parse(localStorage.getItem("com_list")) ?? [],
  );

  function clearCompleted() {
    localStorage.removeItem("com_list");
    setComList([]);
  }

  return (
    <div className="completeContainer">
      <Menu />

      <div className="complete-screen">
        <button onClick={clearCompleted}>Clear Completed</button>

        {comList.map((item, index) => (
          <Task key={index} title={item.description} />
        ))}
      </div>
    </div>
  );
}

export default Complete;
