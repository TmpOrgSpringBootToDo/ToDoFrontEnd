import {get, post, patch, destroy} from "./APIHandler";

const login = (loginData) => {
    //TODO: Change fake url to login url
    post(
        `http://localhost:8080/todo/api/v1/users/`,
        loginData,
        (err, res) => {
            if(err){
                //TODO: Handle error
                return
            }
            console.log(res)
            //TODO: Save user ID to local storage
        }
    )
}


export { login };