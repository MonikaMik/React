import EditTaskModal from "./EditTaskModal";
import { useState } from "react";

const ToDoItem = ({ task, deleteTask, changeTaskStatus, editTask }) => {
    const containerClass = task.isCompleted ? "greenBg" : task.isUrgent ? "urgent" : "white";
    const iconClass = task.isCompleted ? "far fa-check-circle" : task.isUrgent ? "fa-regular fa-hourglass-half" : "";

    var options = {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
      <div className={containerClass}>
        <i className={iconClass}></i>
        <h2 onClick={() => changeTaskStatus({...task, isCompleted: !task.isCompleted})}>
            {task.title}
        </h2>
        <span>- {new Date(task.dueDate).toLocaleDateString('en-GB', options)}</span>
        <i className="fa-solid fa-pen-to-square" onClick={() => setIsDialogOpen(!isDialogOpen)}></i>
        <i className="fas fa-trash" onClick={() => deleteTask(task)}></i>
        {
            isDialogOpen && (
                <EditTaskModal
                    task={task}
                    editTask={editTask}
                    isDialogOpen={isDialogOpen}
                    setIsDialogOpen={setIsDialogOpen} 
                />
         )}
      </div>
    );
  };
  
  export default ToDoItem;
