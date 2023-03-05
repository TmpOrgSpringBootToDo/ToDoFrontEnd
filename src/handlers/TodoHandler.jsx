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
    const findAllURL = process.env["REACT_APP_TO_DO_URL"] + `${useId}/todo`
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
        process.env["REACT_APP_TO_DO_URL"] + `${userId}/todo`,
        {
            userIdTodo: userId,
            toDo: todoTask.name,
            dateTime: new Date(),
            isComplete:todoTask.isComplete
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
    const updateUrl = process.env["REACT_APP_TO_DO_URL"] + `${userId}/todo/${taskId}`
    const data = {
        userIdTodo: userId,
        toDo: todoTask.name,
        dateTime: new Date(),
        isComplete: todoTask.isComplete
    }
    console.log(JSON.stringify(data))
    patch(
        updateUrl,
        data,
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

const isComplete = (completeStatus) => {
    console.log(completeStatus)
    // const userId = "d88c65bc-e2b2-4039-bf55-801bfda0dd90"
    const userId = localStorage.getItem("userId")
    const updateUrl = process.env["REACT_APP_TO_DO_URL"] + `${userId}/todo/${completeStatus.taskId}`
    patch(
        updateUrl,
        {
            userIdTodo: userId,
            toDo: completeStatus.name,
            dateTime: new Date(),
            isComplete:completeStatus.complete
        },
        (err, res) => {
            if(err){
                //TODO: Handle error
                // callback(err, null)
                // return
            }
            console.log(res)
            //callback(null, res)
        }
    )
}

const deleteTask = (userId, taskId) => {
    const useId = localStorage.getItem("userId")
    const deleteUrl = process.env["REACT_APP_TO_DO_URL"] + `${useId}/todo/${taskId}`
    destroy(deleteUrl, (err, msg) => {
        if(err){
            // TODO: Handle error
            return
        }
        console.log("Delete successfully")
    })
}

export { findAllTasks, saveTask, editTask, deleteTask,isComplete };