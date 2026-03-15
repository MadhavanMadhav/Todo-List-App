import React from "react";
import "./progress.css";

function ProgressBar({ total, completed }) {

  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-container">

      <div className="progress-info">
        <span>Progress</span>
        <span>{percentage}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

    </div>
  );
}

export default ProgressBar;