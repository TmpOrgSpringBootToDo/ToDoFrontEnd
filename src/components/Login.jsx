import {useState} from "react";
import {UserPlusIcon} from "@heroicons/react/24/solid";
import {UserMinusIcon,} from "@heroicons/react/24/solid";
import styles from './SignUp.module.css';
import {login} from '../handlers/LoginHandler'

export const Login = ({addUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleFormSubmit = (e) => {
        e.preventDefault();
        //TODO: Call Login API in LoginHandler.jsx
        const loginHandle = () =>{
            const loginData = {
                emailL:email,
                passwordL:password
            }
            login(loginData);
        }
        loginHandle();
        setEmail("");
        setPassword("");
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
                    type="email"
                    id="email"
                    className={styles.input}
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                    required
                    autoFocus
                    maxLength={100}

                />
                <p className="mod-label">Password</p>
                <input
                    type="password"
                    id="password"
                    className={styles.input}
                    value={password}
                    onInput={(e) => setPassword(e.target.value)}
                    required
                    autoFocus
                    maxLength={30}

                />

            </div>
            <div>

            <button
                id="btn-login"
                className={styles.btn}
                aria-label="Add Task"
                type="submit"
            >
                <UserPlusIcon />
            </button>
                <button
                    id="btn-logout"
                    className={styles.btn}
                    aria-label="Logout"
                    type="submit"
                    onClick={logout}
                >
                    <UserMinusIcon />

                </button>
            </div>
        </form>
    );
}