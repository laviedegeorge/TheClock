import React from "react"

function TimeSplit (){
    return (
        
        <span 
            className = "split-time"
            hours = {this.props.hours}
            minutes = {this.props.minutes}
            seconds = {this.props.seconds}
        >
            {this.props.hours} : {this.props.minutes} : {this.props.seconds}
        </span>
            
    )
}

export default TimeSplit