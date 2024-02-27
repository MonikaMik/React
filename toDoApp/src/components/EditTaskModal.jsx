import { useRef, useState, useEffect } from "react";

const EditTaskModal = ({task, editTask, isDialogOpen, setIsDialogOpen}) => {

    const dialogRef = useRef(null);
    const [editedTask, setEditedTask] = useState(task.title);
    
    const toLocalISOString = date => {
        const offset = date.getTimezoneOffset() * 60000; 
        const localISOTime = (new Date(date - offset)).toISOString().slice(0, 16);
        return localISOTime;
    };

    const [editedDate, setEditedDate] = useState(toLocalISOString(new Date(task.dueDate)));

    const handleInputChange = (e) => {
      setEditedTask(e.target.value);
    };
    const handleDateInputChange = (e) => {
        setEditedDate(e.target.value);
    };
    const  checkIfUrgent = () => {
        return (new Date(editedDate) - new Date()) / 60000 < 60;
    };

    const formSubmit = e => {
      e.preventDefault();
      editTask({ ...task, isCompleted: false, title: editedTask ? editedTask : task.title, dueDate: editedDate ? new Date(editedDate) : task.dueDate, isUrgent: checkIfUrgent() });
      setIsDialogOpen(false);
    };

    useEffect(() => {
        if (isDialogOpen && dialogRef.current) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.hideModal();
        }
    }, [isDialogOpen]);
    
    return ( 
        <dialog ref={dialogRef}>
                <div className="titleDiv">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <h2>Edit task - {task.title}</h2>
                </div>
                <form id="editForm" onSubmit={formSubmit}>
                    <div className="inputDiv">
                        <label htmlFor="newTaskTitle">Task name:</label>
                        <input 
                            type="text"
                            value={editedTask} 
                            onChange={handleInputChange}
                            id="newTaskTitle"
                            placeholder={task.title}
                        />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="newTaskDate">Task due:</label>
                        <input
                            type="datetime-local"
                            id="newTaskDate"
                            value={editedDate}
                            onChange={handleDateInputChange}
                        />
                    </div>
                    <div className="buttonDiv">
                        <input type="submit" value="Submit" />
                        <input type="button" value="Cancel" onClick={()=>setIsDialogOpen(false)}/>
                    </div>
                </form>
        </dialog>
     );
}

export default EditTaskModal;

// import { useState } from "react";

// const EditTaskModal = ({task, editTask, isDialogOpen, setIsDialogOpen}) => {

//     const [editedTask, setEditedTask] = useState('');
  
//     const handleInputChange = (e) => {
//       setEditedTask(e.target.value);
//     };
  
//     const formSubmit = e => {
//       e.preventDefault();
//       editTask({ ...task, isCompleted: false, title: editedTask });
//       setIsDialogOpen(false);
//     };
    
//     return ( 
//         <dialog open={isDialogOpen}>
//                 <div className="titleDiv">
//                     <i className="fa-solid fa-pen-to-square"></i>
//                     <h2>Edit task - {task.title}</h2>
//                 </div>
//                 <form id="editForm" onSubmit={formSubmit}>
//                     <div className="inputDiv">
//                         <label htmlFor="newTaskTitle">Task name:</label>
//                         <input 
//                             type="text"
//                             value={editedTask} 
//                             onChange={handleInputChange}
//                             id="newTaskTitle"
//                             placeholder={task.title}
//                         />
//                     </div>
//                     <div className="buttonDiv">
//                         <input type="submit" value="Submit" />
//                         <input type="button" value="Cancel" onClick={()=>setIsDialogOpen(false)}/>
//                     </div>
//                 </form>
//         </dialog>
//      );
// }
 
// export default EditTaskModal;

