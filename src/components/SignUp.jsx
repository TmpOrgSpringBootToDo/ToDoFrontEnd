import {useState} from "react";
import {PlusCircleIcon} from "@heroicons/react/24/solid";
import styles from './SignUp.module.css';

export const SignUp = ({addUser}) => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addUser({
            name: userName,
            checked: false,
            id: Date.now()
        })
        setUserName("")
    }

   return(
     <form>
         <div className={styles.wrapper}>
             <input
                 type="text"
                 id="userName"
                 className={styles.input}
                 value={userName}
                 onInput={(e) => setUserName(e.target.value)}
                 required
                 autoFocus
                 maxLength={20}
                 placeholder="Enter Task"
             />
             <label
                 htmlFor="userName"
                 className={styles.label}
             >User Name</label>
             <input
                 type="email"
                 id="email"
                 className={styles.input}
                 value={email}
                 onInput={(e) => setEmail(e.target.value)}
                 required
                 autoFocus
                 maxLength={20}
                 placeholder="Enter Task"
             />
             <label
                 htmlFor="email"
                 className={styles.label}
             >Email</label>
             <input
                 type="password"
                 id="password"
                 className={styles.input}
                 value={password}
                 onInput={(e) => setPassword(e.target.value)}
                 required
                 autoFocus
                 maxLength={20}
                 placeholder="Enter Task"
             />
             <label
                 htmlFor="password"
                 className={styles.label}
             >Password</label>

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