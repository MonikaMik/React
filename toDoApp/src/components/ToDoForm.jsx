import { useState } from 'react';

const ToDoForm = ({addTask}) => {

    const [newTask, setNewTask] = useState('');
    const [newDueDate, setNewDueDate] = useState(new Date());
  
    const handleInputChange = e => {
      setNewTask(e.target.value);
    };

    const handleDateInputChange = e => {
      setNewDueDate(e.target.value);
    };

    const  checkIfUrgent = () => {
        return (new Date(newDueDate) - new Date()) / 60000 < 60;
    };
     
    const formSubmit = e => {
      e.preventDefault();
      addTask({ id: String(Number(Date.now())), isCompleted: false, title: newTask, dueDate: new Date(newDueDate), isUrgent: checkIfUrgent() });
      setNewTask('');
      setNewDueDate('');
    };

    return ( 
        <section id="addTask">
            <h1>Your tasks</h1>
           <form onSubmit={formSubmit}>
                <input
                    type="text"
                    placeholder="e.g. wash dishes"
                    value={newTask}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="datetime-local"
                    value={newDueDate}
                    onChange={handleDateInputChange}
                    required
                />
                <input 
                    type="submit" 
                    value="Add" 
                />
            </form>
        </section>
     );
}
 
export default ToDoForm;


