import React from "react";
import "./Tasks.scss";
import editSvg from "../../assets/img/edit.svg";

<<<<<<< HEAD
const Tasks = ({ list }) => {
  return (
    <div className="tasks">
      <h2 className="tasks__title">
        {list.name}
=======
const Tasks = () => {
  return (
    <div className="tasks">
      <h2 className="tasks__title">
        Frontend
>>>>>>> 8ea5311b92f0343fd372e8101f64f3253577027a
        <img src={editSvg} alt="edit icon" />
      </h2>

      <div className="tasks__items">
<<<<<<< HEAD
        {list.tasks.map((task) => (
          <div key={task.id} className="tasks__items-row">
            <div className="checkbox">
              <input id={`task-${task.id}`} type="checkbox" />
              <label htmlFor={`task-${task.id}`}>
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </label>
            </div>
            <input readOnly value={task.text} />
          </div>
        ))}
=======
        <div className="tasks__items-row">
          <div className="checkbox">
            <input id="check" type="checkbox" />
            <label htmlFor="check">
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>
          </div>

          <p>Qweqweqweqweqweqwe qweqweqwe qweqweqwe</p>
        </div>
>>>>>>> 8ea5311b92f0343fd372e8101f64f3253577027a
      </div>
    </div>
  );
};

export default Tasks;
