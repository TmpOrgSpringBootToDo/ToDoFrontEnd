import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom";
import {findAllTasks} from "../handlers/TodoHandler";
import styles from '../index.css';

export const NavBar = () =>{
    const [isUser, setUser] = useState(false);

    useEffect(() => {
        isUserAvailable()
    }, [])

    const isUserAvailable = () => {
        const userId = localStorage.getItem("userId")
        if(userId){
            setUser(true)
        }
    }

    return(
        <div>
            <header>
                <h1 style={styles.headerView}>ToDo Viewer</h1>
            </header>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                    '& > *': {
                        m: 3,
                    },
                }}
            >
                <ButtonGroup size="large" aria-label="large button group">
                    <Link to="/">
                        <Button>Sign-In</Button>
                    </Link>
                    <Link to="/signup">
                        <Button>Sign-Up</Button>
                    </Link>
                    <Link to="/todo" className={isUser? 'display-flex' : 'hidden'}>
                        <Button>ToDoView</Button>
                    </Link>
                </ButtonGroup>

            </Box>

        </div>
    );
 }