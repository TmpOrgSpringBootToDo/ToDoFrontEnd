
import { useState } from 'react';
import './App.css';
import { MainForm } from './components/MainForm';


function App() {
  const [task, setTask] = useState ([]);
  
  const addTask = (task) =>{
    setTask(pvState => [...pvState, task])
    //console.log(task)
  }

  return (
    <div className="App">
      <h1>ToDoView -v 1.0.0</h1>
      <p>For Better Planed Solutions</p>
      <MainForm addTask= {addTask} />
    </div>
  );
}

export default App;
