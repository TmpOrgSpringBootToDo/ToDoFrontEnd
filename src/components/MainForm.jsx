import React, { useState } from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'


export const MainForm = ({addTask}) => {
    const [mainInput,setMainInput] = useState("")

  const handleFormSubmit = (e) =>{
     e.preventDefault();

     //Get input values to out side
     addTask({
         name:mainInput,
         checked:false,
         id:Date.now()
     });




     setMainInput("");
    // console.log(e);
  }

  return (    
    <form
    className='todoForm'
    onSubmit={handleFormSubmit}
    
    >
        <p>{mainInput}</p>
        <div className='outer-boundry'>
           <input
           type="text"
           id="mainInput"
           value={mainInput}
           onInput={(e) => setMainInput(e.target.value)}
           required
           autoFocus
           maxLength={100}
           placeholder ="Add Your Tasks Here"
           />          
        </div>
        <button
        className='btn-btn primary'
        aria-label='Add Task'
        type='submit'       
        >
        <PlayIcon className="h-6 w-6 text-blue-500"/>
         Add 
        </button>

    </form>
  )
}
