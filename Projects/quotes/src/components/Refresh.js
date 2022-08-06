import React from 'react'
import Button from '@mui/material/Button';
import '../App.css'; 

function Refresh({quotes, quote, setquote, author, setauthor}) {
    const handleClick = () => {
        let idx = Math.floor(Math.random() * (8))
        setquote(quotes[idx].quote)
        setauthor(quotes[idx].author)
    }
  return (
    <div style={{paddingTop: 50}}>
        <Button 
        color="secondary"
        variant="contained"
        onClick={handleClick}
        >New Quote</Button>
        </div>
    )
}

export default Refresh
