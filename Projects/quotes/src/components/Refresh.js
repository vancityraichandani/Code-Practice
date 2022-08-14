import React from 'react'
import Button from '@mui/material/Button';
import '../App.css';
import { useDispatch } from 'react-redux'

function Refresh({ quotes, quote, setquote, author, setauthor }) {
    const dispatch = useDispatch()
    return (
        <div style={{ paddingTop: 50 }}>
            <Button
                color="secondary"
                variant="contained"
                onClick={() => dispatch(({ type: 'REFRESH', data: 'you just refreshed it bro! 😁' }))}
            >New Quote</Button>
        </div>
    )
}

export default Refresh
