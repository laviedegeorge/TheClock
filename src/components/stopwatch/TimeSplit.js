import React from "react"

function TimeSplit (props){
    return (
        
        <span className = "split-time">
            {props.hours} : {props.minutes} : {props.seconds}
        </span>
            
    )
}

export default TimeSplit