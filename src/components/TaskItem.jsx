import { useState } from 'react';

// styles
import styles from './TaskItem.module.css';

// Library imports
import { CheckIcon  } from '@heroicons/react/24/outline';
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';
import {editTask, isComplete} from "../handlers/TodoHandler";

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  const [isChecked, setIsChecked ] = useState(task.isChecked);

  const handleCheckboxChange = (e) =>{
    setIsChecked(e.target.checked);
    toggleTask(task.id);


    const completeStatus ={
      name: task.name,
      taskId:task.id,
      isComplete:e.target.checked
    }
    console.log(completeStatus);
    // isComplete(completeStatus);
    editTask(task.id, completeStatus, (err, res) => {
      if(err){
        // TODO: Handle error
        return
      }
      console.log(res)
    })
  }

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label
          htmlFor={task.id}
          className={styles.label}
        >
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24}/>
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className='btn'
          aria-label={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>

        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>

      </div>
    </li>
  )
}
export default TaskItem