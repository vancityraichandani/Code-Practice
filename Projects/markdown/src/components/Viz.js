import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../App.css';
import { marked } from 'marked';

function Viz({ text, setText }) {
const markdown = marked(text)
    return (
        <div dangerouslySetInnerHTML={{__html:markdown}} style={{marginTop:10}}>
        </div>
    )
}

export default Viz