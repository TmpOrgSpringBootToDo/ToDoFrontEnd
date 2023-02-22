import React from 'react'

export const MainForm = () => {

  const handleFormSubmit = (e) =>{
     e.preventDefault();
     console.log(e);
  }

  return (
    <form
    className='todoForm'
    onSubmit={handleFormSubmit}
    >
        <div className='outer-boundry'>
           <input
           type="text"
           id="main-input"
           //onInput={(e) => setTask(e.target.value)}
           autoFocus
           maxLength={100}
           placeholder ="Add Your Tasks Here"
           />
           
        </div>

    </form>
  )
}
