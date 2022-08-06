import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../App.css';

function Editor({ text, setText }) {

    const handleChange = ({ target: { value } }) => {
        setText(value)
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