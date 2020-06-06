import React from 'react'
import Analog from './Analog'
import Digital from './Digital'

function Clock (props){

    return (
        <div className='clock'>
            <Analog 
                time={props.time}
            />
            <Digital 
                time={props.time}
            />
        </div>
    )
}

export default Clock