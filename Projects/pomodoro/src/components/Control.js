import React, { useEffect, useState } from 'react'

function Control({ data }) {

    let { play, setPlay,time, setTime, minutes, setMinutes, seconds, setSeconds, fixedSec, fixedMin } = data


    function resolveAfter1Second() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('res')
            }, 1000)
        });
    }

    useEffect(() => {
        if (play) {
            (async () => {
                while (play && parseInt(fixedMin, 10) > 0 || parseInt(fixedSec, 10) > 0) {
                    if (parseInt(fixedSec, 10) === 0) {
                        fixedMin--;
                        fixedSec = 59
                    } else if (fixedSec > 0) {
                        fixedSec--
                    }
                    const result = await resolveAfter1Second();
                    setSeconds(fixedSec < 10 ? '0' + fixedSec : fixedSec)
                    setMinutes(fixedMin < 10 ? '0' + fixedMin : fixedMin)
                }
                setPlay(false)
            })();
        }else{
            setSeconds(fixedSec)
            setMinutes(fixedMin)
        }
    }, [play])

    // async function handleClick({ target }) {
    //     let { value } = target
    //     setPlay(!value)
    //     if (!value) {
    //         while (parseInt(fixedMin, 10) > 0 || parseInt(fixedSec, 10) > 0) {
    //             if (parseInt(fixedSec, 10) === 0) {
    //                 fixedMin--;
    //                 fixedSec = 59
    //             } else if (fixedSec > 0) {
    //                 fixedSec--
    //             }
    //             const result = await resolveAfter1Second();
    //             setSeconds(fixedSec < 10 ? '0' + fixedSec : fixedSec)
    //             setMinutes(fixedMin < 10 ? '0' + fixedMin : fixedMin)
    //         }
    //     }
    // }

    return (
        <div>
            <button
                onClick={() => setPlay(!play)}
            >
                <div>
                    {
                        !play ? 'Play' : 'Reset'
                    }
                </div>
            </button>
        </div>
    )
}

export default Control