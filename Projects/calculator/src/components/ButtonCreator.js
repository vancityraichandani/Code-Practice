import { createFilterOptions } from '@mui/material'
import React, { useEffect, useState } from 'react'
import keys from '../constants/KeyData'

const colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange', 'cyan', 'aqua', 'crimson', 'royalblue']
function ButtonCreator() {

    const [led, setLed] = useState('')
    const [power, setPower] = useState(false)
    const [status, setStatus] = useState(false)
    const [curr, setCurr] = useState(null)
    const [int, setInt] = useState(null)

    useEffect(() => {
        /**
         * @desc DidMount
         */

        setLed('black')
    }, [])

    useEffect(() => {
        /**
         * @desc Turning off calc on power : false
         */

        if (!power) {
            setTimeout(() => {
                setLed('black')
            }, 2000);
        }
    }, [power])

    useEffect(() => {
        /**
         * @desc evaluation on keyPress and power ON
         */
        if (power) {
            let ans = ''
            console.log('c', curr);
            switch (curr) {
                case 'AC':
                    ans = '👀'
                    break
                case '=':
                    ans = eval(keys[18]['key'])
                    break
                default:
                    ans = keys[18]['key'] === 'DISPLAY' ? curr : keys[18]['key'] + curr

            }
            console.log('a', ans);
            keys[18]['key'] = ans
        }

    }, [curr])


    const handleClick = (e, key) => {

        if (key === '⚡' && !power) {
            setPower(true)
            setStatus('Turning Power On! Enjoy the fireworks! 🎆')
            setTimeout(() => {
                keys[18]['key'] = '👀'
                setStatus('')
            }, 2000)
            let interval = setInterval(() => {
                let idx = Math.floor(Math.random() * (9))
                setLed(colors[idx] ?? 'black')
            }, 2000);
            setInt(interval)
            return
        } else if (key === '⚡') {
            setPower(false)
            setStatus('Turning Power Off! Save Battery! 🔋')
            setTimeout(() => {
                setStatus('')
                keys[18]['key'] = '🙈'
            }, 2000)
            clearInterval(int)
            return
        }

        if (power) {
            setCurr(key)
        }
    }

    const handleMouseEnter = (e, idx) => {
        e.target.style['cursor'] = 'pointer'
        if(idx !== 18){
            e.target.style['background-color'] = 'lightskyblue';
            e.target.style['border-radius'] = '10px';
            e.target.style['height'] = '43px';
            e.target.style['width'] = `${parseInt(e.target.style['width'].split('px')[0]) - 4}px`;
            e.target.style['bottom'] = `${parseInt(e.target.style['bottom'].split('px')[0]) + 4}px`
            e.target.style['left'] = `${parseInt(e.target.style['left'].split('px')[0]) + 2}px`
        }
    }

    const handleLeave = (e, idx) => {
        e.target.style['height'] = '50px';
        if (idx !== 18) {
            e.target.style['background-color'] = keys[idx]['color'];
            e.target.style['border-radius'] = '6px';
            e.target.style['width'] = `${parseInt(e.target.style['width'].split('px')[0]) + 4}px`;
            e.target.style['bottom'] = `${parseInt(e.target.style['bottom'].split('px')[0]) - 4}px`
            e.target.style['left'] = `${parseInt(e.target.style['left'].split('px')[0]) - 2}px`
        }
    }

    return (
        <>
            <div style={{ border: '1px solid black', margin: '30px auto', backgroundColor: 'grey', height: '301px', width: '303px', position: 'relative' }}>
                {
                    keys.map(({ key, height, width, left, bottom, idx,color }) => (
                        <div
                            key={idx}
                            style={{ fontWeight: 'bold', borderRadius: '6px', boxShadow: `1px 1px 2px 1px ${led}`, border: '2px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: `${height}px`, width: `${width}px`, position: 'absolute', left: `${left}px`, bottom: `${bottom}px`,backgroundColor:color }}
                            onMouseEnter={(e) => handleMouseEnter(e, idx)}
                            onClick={(e) => handleClick(e, key)}
                            onMouseLeave={(e) => handleLeave(e, idx)}
                        >{key === 'DISPLAY' ? '🙈' : key}
                        </div>
                    ))

                }
            </div>
            {
                status
            }
        </>
    )
}

export default ButtonCreator
