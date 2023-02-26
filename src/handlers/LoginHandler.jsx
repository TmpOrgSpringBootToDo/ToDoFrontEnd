import {get, post, patch, destroy} from "./APIHandler";
import { redirect } from "react-router-dom";


const responseData ={};
const login = (loginData) => {
    //TODO: Change fake url to login url
    get(
        `http://localhost:8080/todo/api/v1/users/${loginData.emailL}/${loginData.passwordL}`,

        (err, res) => {
            if(err){
                //TODO: Handle error
                return
            }
            //console.log(res)
            //TODO: Save user ID to local storage
            //console.log(res.data.id)
            localStorage.clear();
            localStorage.setItem("userId", res.data.id)


            // localStorage.setItem("email", res.email)
            // localStorage.setItem("password", res.password)
            // localStorage.setItem("userName", res.userName)
            // eslint-disable-next-line no-unused-expressions

        }
    )
}


export { login };