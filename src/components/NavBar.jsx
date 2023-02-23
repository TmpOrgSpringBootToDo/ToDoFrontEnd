import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom";

export const NavBar = () =>{
    return(
        <div>
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
                    <Link to="/todo">
                        <Button>ToDoView</Button>
                    </Link>
                </ButtonGroup>

            </Box>
        </div>
    );
 }