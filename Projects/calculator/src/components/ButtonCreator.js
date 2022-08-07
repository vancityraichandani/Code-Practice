import React, { useEffect, useState } from 'react'
import keys from '../constants/KeyData'

const colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange', 'cyan']
function ButtonCreator() {

    const [led, setLed] = useState('')
    const [power, setPower] = useState(false)
    const [status, setStatus] = useState(false)
    const [expression, setExpression] = useState('')
    useEffect(() => {
        setLed('black')
    }, [])
    
    
    const handleClick = (e, key) => {
        if (power) {
    
            switch (key) {
                case 'AC':
                    setExpression('👀')
                    break
                case '+':
                case '-':
                case '*':
                case '/':
                case '=':
                default:
                    setExpression('👇')
    
            }
            keys[18]['key'] = expression
    
    
        }
        if (key === '⚡' && !power) {
            setPower(true)
            setStatus('Turning Power On! Enjoy the fireworks! 🎆')
            setTimeout(() => {
                keys[18]['key'] = '👀'
                setStatus('')
            }, 1500)
        } else if (key === '⚡') {
            setPower(false)
            setStatus('Turning Power Off! Save Battery! 🔋')
            setTimeout(() => {
                setStatus('')
                keys[18]['key'] = '🙈'
            }, 1500)
        }


    }

    useEffect(() => {
        if (!power) {
            var noofTimeOuts = setTimeout('');
            setTimeout(() => {
                setLed('black')
            }, 1500);
        }
    }, [power])

    if (power === true) {
        setTimeout(() => {
            let idx = Math.floor(Math.random() * (7))
            setLed(colors[idx])
        }, 1500);
    }
    const handleMouseEnter = (e) => {
        e.target.style['cursor'] = 'pointer'
        e.target.style['background-color'] = 'lightskyblue';
        e.target.style['border-radius'] = '10px';
        e.target.style['border'] = '2px solid dodgerblue';
    }
    const handleLeave = (e) => {
        e.target.style['background-color'] = 'grey';
        e.target.style['border-radius'] = '6px';
        e.target.style['border'] = '2px solid black';
    }

    return (
        <>
            <div style={{ border: '1px solid black', margin: '30px auto', backgroundColor: 'grey', height: '301px', width: '303px', position: 'relative' }}>
                {
                    keys.map(({ key, height, width, left, bottom }) => (
                        <div
                            style={{ fontWeight: 'bold', borderRadius: '6px', boxShadow: `1px 1px 2px 1px ${led}`, border: '2px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: `${height}px`, width: `${width}px`, position: 'absolute', left: `${left}px`, bottom: `${bottom}px` }}
                            onMouseEnter={(e) => handleMouseEnter(e)}
                            onClick={(e) => handleClick(e, key)}
                            onMouseLeave={(e) => handleLeave(e)}
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
