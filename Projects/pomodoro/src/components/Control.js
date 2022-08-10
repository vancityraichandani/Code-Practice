import React from 'react'

function Control({ data }) {

    let { time, setTime, minutes, seconds, setSeconds } = data

    function resolveAfter1Second() {
        return new Promise(resolve => {
            setTimeout(() => {
                setSeconds(seconds - 1)
                resolve('resolved');
            }, 1000)
        });
    }

    async function handleClick() {
        const result = await resolveAfter1Second();
        console.log(result);
        // expected output: "resolved"
    }


    const handleClick = () => {

        const to = await callTimeout()
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