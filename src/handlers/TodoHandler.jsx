import {get, post, destroy} from "./APIHandler";

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
    const findAllURL = `http://localhost:8080/todo/api/v1/users/${userId}/todo`
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
    const userId = "d88c65bc-e2b2-4039-bf55-801bfda0dd90"
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

const deleteTask = (userId, taskId) => {
    const deleteUrl = `http://localhost:8080/todo/api/v1/users/${userId}/todo/${taskId}`
    destroy(deleteUrl, (err, msg) => {
        if(err){
            // TODO: Handle error
            return
        }
        console.log("Delete successfully")
    })
}

export { findAllTasks, saveTask, deleteTask };