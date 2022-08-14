import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../App.css';
import { useDispatch } from 'react-redux';

function Editor({ text }) {
    const dispatch = useDispatch()
    const handleChange = ({ target: { value } }) => {
        dispatch({type:'TYPING', text: value})
    }

    return (
        <div style={{paddingTop: 20 }}>
            <textarea style={{border:'4px solid green'}}
                value={text}
                rows="10" cols="50"
                onChange={handleChange}
            />
        </div>
    )
}

export default Editor