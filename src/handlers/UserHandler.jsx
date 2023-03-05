import {post} from "./APIHandler";

 export const saveUser = (addUserSignUp) => {
    // const userId = "d88c65bc-e2b2-4039-bf55-801bfda0dd90"
   // const userId = localStorage.getItem("userId")
    post(
        process.env["REACT_APP_USERS_URL"],
        {
            userName: addUserSignUp.userNameSU,
            email: addUserSignUp.emailSU,
            password: addUserSignUp.passwordSU
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
