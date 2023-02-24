import {useState} from 'react';
import {PlusIcon} from '@heroicons/react/24/solid'
import {saveTask} from "../handlers/TodoHandler";

const MainForm = ({addTask}) => {
    const [task, setTask] = useState("");

    const handleFormSubmit = (e) => {
        console.log(e.target.value);
        e.preventDefault();
        const todoTask = {
            name: task,
            checked: false,
            id: Date.now()
        }
        addTask(todoTask)
        setTask("")
        saveTask(todoTask)
    }

    return (
        <form
            className="todo"
            onSubmit={handleFormSubmit}
        >
            <div className="wrapper">
                <input
                    type="text"
                    id="task"
                    className="input"
                    value={task}
                    onInput={(e) => setTask(e.target.value)}
                    required
                    autoFocus
                    maxLength={60}
                    placeholder="Enter Task"
                />
                <label
                    htmlFor="task"
                    className="label"
                >ADD YOUR TASK</label>
            </div>
            <button
                className="btn"
                aria-label="Add Task"
                type="submit"
            >
                <PlusIcon/>
            </button>

        </form>
    )
}
export default MainForm