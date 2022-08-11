import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => {
        setShow(show ? false : true)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Pomodoro Clock
                    </Typography>
                    <Button
                        sx={{ width: 200 }}
                        onClick={handleClick}
                        color="inherit">
                        {
                            show ?
                                'Hide Definition' :
                                "What's Pomodoro?"
                        }
                    </Button>
                </Toolbar>
            </AppBar>
            <div style={{marginTop:50, height: 30}} >
            {
                show
                &&
                'Pomodoro = 25 + 5 Clock | Work 25 mins, Have a break for 5 mins!'
            }
            </div>
        </Box>
    );
}
