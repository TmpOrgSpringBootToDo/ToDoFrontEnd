import {useState} from "react";
import {PlusCircleIcon} from "@heroicons/react/24/solid";
import styles from './SignUp.module.css';
import useLocalStorage from "../hooks/useLocalStorage";

export const SignUp = ({addUser}) => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleFormSubmit = (e) => {

        e.preventDefault();

        addUser({
            userName: e.target.userName.value,
            email: e.target.email.value,
            password: e.target.password.value,
        })
        console.log(addUser);
        setUserName("")
    }

   return(
     <form
         className={styles.todo}
         onSubmit={handleFormSubmit}
     >
         <div className={styles.wrapper}>
             <p className="mod-label">User Name</p>
             <input
                 type="text"
                 id="userName"
                 className={styles.input}
                 defaultValue={userName}
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
                 defaultValue={email}
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
                 defaultValue={password}
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