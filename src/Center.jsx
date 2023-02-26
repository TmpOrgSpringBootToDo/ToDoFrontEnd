import { useState, useEffect } from 'react'

// custom hooks
import useLocalStorage from './hooks/useLocalStorage'

// custom components
import MainForm from './components/MainForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList'
import { findAllTasks, deleteTask, editTask } from "./handlers/TodoHandler";

function Center() {
  const [tasks, setTasks] = /*useLocalStorage('react-todo.tasks', [])*/ useState([]);

  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    findAllTasks("d88c65bc-e2b2-4039-bf55-801bfda0dd90", (err, tasks) => {
      setTasks(tasks)
    })
  }, [])

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTodoTask = (id) => {
    deleteTask("d88c65bc-e2b2-4039-bf55-801bfda0dd90", id)
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  const updateTodoTask = (task) => {
    editTask(task.id, task, (err, res) => {
      if(err){
        // TODO: Handle error
        return
      }
      console.log(res)
    })
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <div className="container">

      {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTodoTask}
            closeEditMode={closeEditMode}
          />
        )
      }
      <MainForm addTask={addTask}/>
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTodoTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  )
}

export default Center