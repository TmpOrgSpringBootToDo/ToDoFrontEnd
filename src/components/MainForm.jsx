import {useState} from 'react';
import Axios from "axios";


import {PlusIcon} from '@heroicons/react/24/solid'

const MainForm = ({addTask}) => {
    const [task, setTask] = useState("");

    const handleFormSubmit = (e) => {

        e.preventDefault();
        const todoTask = {
            name: task,
            checked: false,
            id: Date.now()
        }
        addTask(todoTask)
        setTask("")
        callTodoAPI(todoTask)
    }

    /**
     * {
     *     "userIdTodo":"d88c65bc-e2b2-4039-bf55-801bfda0dd90",
     *     "toDo":"mytodo",
     *     "dateTime": "{{currentDate}}"
     * }
     * @param todoTask
     */
    const callTodoAPI = (todoTask) => {
        const data = {
            userIdTodo: "d88c65bc-e2b2-4039-bf55-801bfda0dd90",
            toDo: todoTask.name,
            dateTime: new Date()
        }
        console.log(`todoTaskData: ${JSON.stringify(data)}`)
        Axios.post("http://localhost:8080/todo/api/v1/users/d88c65bc-e2b2-4039-bf55-801bfda0dd90/todo", data)
            .then(res => {
                console.log(`Response: ${JSON.stringify((res))}`)
            })
            .catch(err => {
                console.error(err);
            })
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