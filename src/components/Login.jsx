import {useState} from "react";
import {UserIcon} from "@heroicons/react/24/solid";
import {ArrowLeftIcon} from "@heroicons/react/24/solid";
import styles from './SignUp.module.css';

export const Login = ({addUser}) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleFormSubmit = (e) => {
        e.preventDefault();
        //TODO: Call Login API in LoginHandler.jsx
        console.log(`Username: ${userName} Password: ${password}`)
        if(userName==="a" && password==="b"){
            localStorage.setItem("userId", "d88c65bc-e2b2-4039-bf55-801bfda0dd90")
            // let btnLogin = document.getElementById("btn-login");
            // btnLogin.addClass("btn-color");
            window.location.reload();
        }
    }

    const logout = () => {
        localStorage.clear()
        window.location.reload();
    }



    return(
        <form
            onSubmit={handleFormSubmit}>

            <div className={styles.wrapper}>
                <h1>Sign in</h1>
                <p className="mod-label">User Name</p>
                <input
                    type="text"
                    id="userName"
                    className={styles.input}
                    value={userName}
                    onInput={(e) => setUserName(e.target.value)}
                    required
                    autoFocus
                    maxLength={20}

                />

                {/*<label*/}
                {/*    htmlFor="userName"*/}
                {/*    className={styles.label}*/}
                {/*>User Name</label>*/}

                <p className="mod-label">Password</p>
                <input
                    type="password"
                    id="password"
                    className={styles.input}
                    value={password}
                    onInput={(e) => setPassword(e.target.value)}
                    required
                    autoFocus
                    maxLength={20}

                />
                {/*<label*/}
                {/*    htmlFor="password"*/}
                {/*    className={styles.label}*/}
                {/*>Password</label>*/}

            </div>
            <div>

            <button
                id="btn-login"
                className={styles.btn}
                aria-label="Add Task"
                type="submit"
            >
                <UserIcon />
            </button>
                <button
                    id="btn-logout"
                    className={styles.btn}
                    aria-label="Logout"
                    type="submit"
                    onClick={logout}
                >
                    <ArrowLeftIcon />
                </button>
            </div>
        </form>
    );
}