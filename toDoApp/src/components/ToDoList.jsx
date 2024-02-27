import ToDoItem from './ToDoItem';

const ToDoList = ({tasks, deleteTask, changeTaskStatus, editTask}) => {
    return ( 
        <section id="taskList">
            {
                tasks.map(task => 
                    <ToDoItem
                        task={task}
                        key={task.id}
                        deleteTask={deleteTask}
                        changeTaskStatus={changeTaskStatus}
                        editTask={editTask}
                    />
                    )
            }
        </section>
     );
}
 
export default ToDoList;