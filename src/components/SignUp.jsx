import {useState} from "react";
import {PlusCircleIcon} from "@heroicons/react/24/solid";
import styles from './SignUp.module.css';
import useLocalStorage from "../hooks/useLocalStorage";
import {saveUser} from "../handlers/UserHandler";

export const SignUp = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const addUserSignUp = {
            userNameSU:userName,
            emailSU:email,
            passwordSU:password
        }
        // addUser(addUserSignUp);

        console.log(addUserSignUp);

        setUserName("");

        setEmail("");
        setPassword("");
        setUserName("");

        saveUser(addUserSignUp);


    }

   return(
     <form
         className={styles.todo}
         onSubmit={handleFormSubmit}
     >
         <div className={styles.wrapper}>
             <h1>Sign up</h1>
             <p className="mod-label">User Name</p>
             <input
                 type="text"
                 id="userName"
                 className={styles.input}
                 defaultValue={userName}
                 onInput={(e) => setUserName(e.target.value)}
                 required
                 autoFocus
                 maxLength={20}
                 placeholder="Enter Task"
                 name="userName"
             />
             {/*<label*/}
             {/*    htmlFor="userName"*/}
             {/*    className={styles.label}*/}
             {/*>User Name</label>*/}
             <p>Email</p>
             <input
                 type="email"
                 id="email"
                 className={styles.input}
                 onInput={(e) => setEmail(e.target.value)}
                 value={email}
                 required
                 autoFocus
                 maxLength={20}
                 placeholder="Enter Task"
                 name="email"
             />
             {/*<label*/}
             {/*    htmlFor="email"*/}
             {/*    className={styles.label}*/}
             {/*>Email</label>*/}
             <p>Password</p>
             <input
                 type="password"
                 id="password"
                 className={styles.input}
                 onInput={(e) => setPassword(e.target.value)}
                 value={password}
                 required
                 autoFocus
                 maxLength={20}
                 placeholder="Enter Task"
                 name="password"
             />
             {/*<label*/}
             {/*    htmlFor="password"*/}
             {/*    className={styles.label}*/}
             {/*>Password</label>*/}

         </div>

         <button
             className={styles.btn}
             aria-label="Add Task"
             type="submit"
         >
             <PlusCircleIcon />
         </button>

     </form>

   );
}