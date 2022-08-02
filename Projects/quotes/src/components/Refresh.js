import React from 'react'
import Button from '@mui/material/Button';

function Refresh({quotes, quote, setquote, author, setauthor}) {
    const handleClick = () => {
        let idx = Math.floor(Math.random() * (8))
        setquote(quotes[idx].quote)
        setauthor(quotes[idx].author)
    }
  return (
    <div style={{marginTop: 10}}>
        <Button 
        variant="contained"
        onClick={handleClick}
        >New Quote</Button>
        </div>
    )
}

export default Refresh
