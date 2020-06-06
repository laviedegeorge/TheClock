import React from 'react'
import Button from './Button';
import TimeSplit from './TimeSplit'
import timeConvert from '../functions/TimeConvert'

class Stopwatch extends React.Component {
    //setting the state of stopwatch component
    constructor() {
        super();
        this.state = {
            hasTimerStarted: false,
            timerStart: 0,
            currentTime: 0,
            splitTime : []
        }
    }

    startTimer = ()=>{
        if (this.state.hasTimerStarted) return;
        this.setState({
            hasTimerStarted: true,
            currentTime: this.state.currentTime,
            timerStart: Date.now() - this.state.currentTime
        })
        this.timer = setInterval(() =>
            this.setState({
                currentTime: Date.now() - this.state.timerStart
            }),
        1000)
    }

    // function to stop the timer
    stopTimer= ()=>{
        this.setState({
           hasTimerStarted: false // setting the timer start to false and clearing the interval.
        })
        clearInterval(this.timer);
    }

    // function to  reset the timer
    resetTimer = ()=>{
        clearInterval(this.timer);
        this.setState({
            hasTimerStarted: false,
            timerStart: 0,
            currentTime: 0,
            splitTime: []
        })
    }

    // function to split time
    splitTimer = ()=>{
        if (!this.state.hasTimerStarted) return
        let timer = [this.state.currentTime, ...this.state.splitTime];
        this.setState({
            splitTime: timer // as an array of timestamp
        });
    }

    render() {
        // Formatting timer display.
        const {currentTime} = this.state
        const [hours, minutes, seconds] = timeConvert(currentTime)
        
        return(
            <div className="timer">
                <p className="md-text intro">Beat the time</p>
                <div className="stopwatch-block">
                    
                    <div>
                        {this.state.splitTime.map((timestamp, id) => {
                            const [hours, minutes, seconds] = timeConvert(timestamp);
                            return (
                                <TimeSplit 
                                    hours = {hours - 1}
                                    minutes = {minutes}
                                    seconds = {seconds}
                                    key = {id}
                                />
                            )
                                
                        })}
                    </div>

                    <p className="lg-text mt-4">
                        {hours - 1} : {minutes} : {seconds}
                    </p> 
                </div>
                
                <div className="buttons mt">
                    <Button 
                        isActive={!this.state.hasTimerStarted ? "red" : ""}
                        caller = {this.stopTimer}
                        iconClassName = "fas fa-stop"
                    />
                    <Button 
                        isActive={this.state.hasTimerStarted ? "green" : ""}
                        caller = {this.startTimer}
                        iconClassName = "fas fa-play"
                    />
                    <Button 
                        caller = {this.resetTimer}
                        iconClassName = "fa fa-refresh"
                    />
                    <Button 
                        caller = {this.splitTimer}
                        iconClassName = "fa fa-clock-o"
                    />
                </div>
            </div>
        )
    }
}


export default Stopwatch