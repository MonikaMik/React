import './App.css';
import { useState, useEffect } from 'react';
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

const App = () => {

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then(res => res.json())
      .then(data => {
        setTasks(data);
      });
  }, []);

  const deleteTask = task => {
    fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: "DELETE",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(tasks.find(t => t.id === task.id))
    })
      .then(() => {
        setTasks(tasks.filter(t => t.id !== task.id));
    });
  };

  const changeTaskStatus = task => {
    fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: "PATCH",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(task)
    })
      .then(() => {
        setTasks(tasks.map(t => 
            t.id === task.id ? { ...t, isCompleted: task.isCompleted } : t
        ));
    });
  }
   
  const addTask = task => {
    fetch(`http://localhost:3001/tasks/`, {
      method: "POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(task)
    })
      .then(() => {
        setTasks([task, ...tasks]);
      })
  }

  const editTask = newTask => {
    fetch(`http://localhost:3001/tasks/${newTask.id}`, {
      method: "PUT",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(newTask)
    })
      .then(() => {
        setTasks(tasks.map(task => 
            task.id === newTask.id ? { ...task, isCompleted: newTask.isCompleted, title: newTask.title, dueDate: new Date(newTask.dueDate), isUrgent: newTask.isUrgent } : task
        ));
    });
  }

  return (
    <>
      <ToDoForm 
        addTask={addTask}
      />
      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        changeTaskStatus={changeTaskStatus}
        editTask={editTask}
      />
    </>
  );
}

export default App;









  // const [tasks, setTasks] = useState([
  //   {
  //     id: 0,
  //     isCompleted: false,
  //     title: "walk the dog",
  //   }, {
  //     id: 1,
  //     isCompleted: true,
  //     title: "wash the dog"
  //   }, {
  //     id: 2,
  //     isCompleted: false,
  //     title: "wash dishes"
  //   }, {
  //     id: 3,
  //     isCompleted: false,
  //     title: "go to gym"
  //   }, {
  //     id: 4,
  //     isCompleted: false,
  //     title: "get a good nights sleep"
  //   }
  // ])
