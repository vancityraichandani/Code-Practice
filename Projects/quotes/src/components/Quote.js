import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'animate.css';
import { useDispatch } from 'react-redux'


function Quote({ quotes, quote, author }) {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'REFRESH', data : 'first time ? 😉' })
    }, [])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
            <Card sx={{ maxWidth: 345 }} variant="outlined">
                <CardContent>
                    <Typography sx={{ marginBottom: 2, fontSize: 14 }} color="text.secondary" gutterBottom>
                        Quote of the Day
                    </Typography>
                    <div key={quote} className="animate__animated animate__rubberBand glow">
                        <Typography sx={{ marginBottom: 4 }} variant="h5" component="div">
                            {quote}
                        </Typography>
                    </div>
                    <Typography variant="body2">
                        {author}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Quote