import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
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
                    <Button>ToDo-View</Button>
                    <Button>Sign-In</Button>
                    <Button>Sign-Up</Button>
                </ButtonGroup>

            </Box>
        </div>
    );
 }