import {get, post, patch, destroy} from "./APIHandler";

/**
 * {
 * "toDoId":5,
 * "userIdTodo":"d88c65bc-e2b2-4039-bf55-801bfda0dd90",
 * "toDo":"hello world",
 * "dateTime":"2023-03-05T12:59:11.332"
 * }
 * @param userId
 */
const findAllTasks = (userId, callback) => {
    const useId = localStorage.getItem("userId")
    const findAllURL = `http://localhost:8080/todo/api/v1/users/${useId}/todo`
    get(
        findAllURL,
        (err, res) => {
            if (err) {
                callback(err, null)
                return
            }
            // console.log(JSON.stringify(res.data))
            callback(null,
                res.data.map(task => {
                    return {
                        id: task.toDoId,
                        name: task.toDo,
                        isChecked: false,
                        dateTime: task.dateTime
                    }
                })
            )
        }
    )
}

const saveTask = (todoTask) => {
    // const userId = "d88c65bc-e2b2-4039-bf55-801bfda0dd90"
    const userId = localStorage.getItem("userId")
    post(
        `http://localhost:8080/todo/api/v1/users/${userId}/todo`,
        {
            userIdTodo: "d88c65bc-e2b2-4039-bf55-801bfda0dd90",
            toDo: todoTask.name,
            dateTime: new Date()
        },
        (err, res) => {
            if(err){
                //TODO: Handle error
                return
            }
            console.log(res)
        }
    )
}


const editTask = (taskId, todoTask, callback) => {
    // const userId = "d88c65bc-e2b2-4039-bf55-801bfda0dd90"
    const userId = localStorage.getItem("userId")
    const updateUrl = `http://localhost:8080/todo/api/v1/users/${userId}/todo/${taskId}`
    patch(
        updateUrl,
        {
            userIdTodo: "d88c65bc-e2b2-4039-bf55-801bfda0dd90",
            toDo: todoTask.name,
            dateTime: new Date()
        },
        (err, res) => {
            if(err){
                //TODO: Handle error
                callback(err, null)
                return
            }
            console.log(res)
            callback(null, res)
        }
    )
}

const deleteTask = (userId, taskId) => {
    const useId = localStorage.getItem("userId")
    const deleteUrl = `http://localhost:8080/todo/api/v1/users/${useId}/todo/${taskId}`
    destroy(deleteUrl, (err, msg) => {
        if(err){
            // TODO: Handle error
            return
        }
        console.log("Delete successfully")
    })
}

export { findAllTasks, saveTask, editTask, deleteTask };