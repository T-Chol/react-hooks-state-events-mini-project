import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text} // Use unique key if available
          text={task.text}
          category={task.category}
          onDeleteTask={onDeleteTask} // Pass the delete function to each Task
        />
      ))}
    </div>
  );
}

export default TaskList;
