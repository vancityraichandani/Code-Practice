import React from 'react'

function Control({ data }) {

    let { time, setTime, minutes, seconds, setSeconds } = data

    function resolveAfter1Second() {
        console.log(seconds);
        setSeconds(parseInt(seconds) + 1)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('res')
            }, 1000)
        });
    }

    function handleClick() {
        const result = await resolveAfter1Second();
        handleClick()
    }

    return (
        <div>
            <button
                onClick={handleClick}>
                Play
            </button>
        </div>
    )
}

export default Control