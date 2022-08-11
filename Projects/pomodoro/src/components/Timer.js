import React, { useEffect, useState } from 'react'

function Timer({ data }) {
    let { time,play, setPlay, setTime, minutes,setMinutes, seconds, fixedSec, fixedMin } = data
    const s=fixedSec
    return (
        <div>
            <span style={{ fontSize: 80 }} >{
            play?
            fixedMin: 25}:</span>
            <span style={{ fontSize: 80 }} >{
            play?
            fixedSec:'00'}</span>
        </div>
    )
}

export default Timer