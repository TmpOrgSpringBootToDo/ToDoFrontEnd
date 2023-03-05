
import {get, post, patch, destroy} from "./APIHandler";
import { redirect } from "react-router-dom";


const responseData ={};
const login = (loginData) => {
    console.log(process.env["REACT_APP_TO_DO_URL"]);
    //TODO: Change fake url to login url
    get(
         process.env["REACT_APP_TO_DO_URL"] + `${loginData.emailL}/${loginData.passwordL}`,

        (err, res) => {
            if(err){
                //TODO: Handle error
                alert("Invalid Email or Password")
                localStorage.clear();
                window.location.reload();
                return
            }
            //console.log(res)
            //TODO: Save user ID to local storage
            //console.log(res.data.id)
            localStorage.clear();
            localStorage.setItem("userId", res.data.id)
            window.location.reload();

        }
    )
}


export { login };