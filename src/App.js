
import {RouteView} from "./components/RouteView";

function App() {
  return (
      <div>
        <RouteView/>
      </div>
  );
}
export default App










  // const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  // const [previousFocusEl, setPreviousFocusEl] = useState(null);
  // const [editedTask, setEditedTask] = useState(null);
  // const [isEditing, setIsEditing] = useState(false);
  //
  // const addTask = (task) => {
  //   setTasks(prevState => [...prevState, task])
  // }
  //
  // const deleteTask = (id) => {
  //   setTasks(prevState => prevState.filter(t => t.id !== id));
  // }
  //
  // const toggleTask = (id) => {
  //   setTasks(prevState => prevState.map(t => (
  //     t.id === id
  //       ? { ...t, checked: !t.checked }
  //       : t
  //   )))
  // }
  //
  // const updateTask = (task) => {
  //   setTasks(prevState => prevState.map(t => (
  //     t.id === task.id
  //       ? { ...t, name: task.name }
  //       : t
  //   )))
  //   closeEditMode();
  // }
  //
  // const closeEditMode = () => {
  //   setIsEditing(false);
  //   previousFocusEl.focus();
  // }
  //
  // const enterEditMode = (task) => {
  //   setEditedTask(task);
  //   setIsEditing(true);
  //   setPreviousFocusEl(document.activeElement);
  // }
  //
  // return (
  //   <div className="container">
  //     <header>
  //       <h1>ToDoViewer - V.1.0.0</h1>
  //     </header>
  //     {
  //       isEditing && (
  //         <EditForm
  //           editedTask={editedTask}
  //           updateTask={updateTask}
  //           closeEditMode={closeEditMode}
  //         />
  //       )
  //     }
  //     <MainForm addTask={addTask}/>
  //     {tasks && (
  //       <TaskList
  //         tasks={tasks}
  //         deleteTask={deleteTask}
  //         toggleTask={toggleTask}
  //         enterEditMode={enterEditMode}
  //       />
  //     )}
  //   </div>
  //)
//}

