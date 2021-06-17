// Code DigitalClicker Component Here
import React from 'react'

//1. create a DigitalClicker React component.
class DigitalClicker extends React.Component {
    //2. Set state property called timesClicked, which is initially defined as 0.
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    //3a - Must create setState() in order to modify, using previousState (already defined in react)
    handleClick = () => {
        this.setState(previousState => { 
            return {
                timesClicked: previousState.timesClicked + 1
            };
        }

        )
    }

    //3.The component renders out a button with a label that shows the timesClicked value
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker;