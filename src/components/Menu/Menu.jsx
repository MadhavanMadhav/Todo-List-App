import React from "react";
import "./Menu.css";
import { useNavigate, useLocation } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="TodoList">
      <h2 className="logo">Todo App</h2>

      <div className="menu-bar">
        <label
          className={location.pathname === "/" ? "active" : ""}
          onClick={() => navigate("/")}
        >
          My Task
        </label>

        <label
          className={location.pathname === "/complete" ? "active" : ""}
          onClick={() => navigate("/complete")}
        >
          Completed
        </label>
      </div>
    </div>
  );
}

export default Menu;
