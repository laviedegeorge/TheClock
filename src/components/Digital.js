import React from 'react'
import timeConvert from './functions/TimeConvert'

function Digital (props){
    const [hours, minutes, seconds] = timeConvert(props.time);
        return (
            <p className="digital-clock">
                {hours} : {minutes} : {seconds}
            </p>
        )
}

export default Digital