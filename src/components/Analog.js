import React from 'react'
import timeConvert from '../functions/TimeConvert'

function Analog (props){
    const [hours, minutes, seconds] = timeConvert(props.time);
        let hr = 30* (hours % 12 + minutes / 60);
        let mins = 6 * minutes;
        let secs = 6 * seconds;
        //console.log(secs)
    
        return (
            <div className="analog-clock">
                <svg width="200" height="200">
                    <circle id="clock_face" cx="70" cy="70" r="65" />
                    <line 
                        id="hr_hand"
                        x1="70" y1="70" x2="70" y2="38"
                        style= {{transform : `rotate(${hr}deg)`}}
                    />
                    <line 
                        id="mins_hand" 
                        x1="70" y1="70" x2="70" y2="20"
                        style= {{transform : `rotate(${mins}deg)`}}
                    />
                    <line 
                        id="secs_tail" 
                        x1="70" y1="70" x2="70" y2="130"
                        style= {{transform : `rotate(${secs + 0}deg)`}}
                        />
                    <text x="62" y="18">12</text>
                    <text x="126" y="76">3</text>
                    <text x="66" y="130">6</text>
                    <text x="7" y="76">9</text>
                </svg>
            </div>
        )
    /* return (
    <p>{props.time}</p>
    ) */
}

export default Analog