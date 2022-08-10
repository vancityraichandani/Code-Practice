import React, { useEffect, useState } from 'react'

function Timer({ data }) {
    let { time, setTime, minutes, seconds } = data
    

    return (
        <div>
            <span style={{ fontSize: 80 }} >{minutes}:</span>
            <span style={{ fontSize: 80 }} >{seconds}</span>
        </div>
    )
}

export default Timer