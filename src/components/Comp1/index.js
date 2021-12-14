import React, { Component } from 'react'

const listItems = {
    minutes: 25,
    seconds: 59,
    value: true,
}

class Comp1 extends Component {
    state = listItems

    componentDidMount() {
        this.timerID = setInterval(this.tick, 1000)
    }
    tick = () => {
        const { seconds, minutes } = this.state
        this.setState({
            seconds: seconds - 1
        })
        if (seconds === 1) {
            this.setState({
                seconds: 59,
                minutes: minutes - 1
            })
        }
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    startPause = () => {
        const { value } = this.state
        console.log("start pause")
        this.setState(prevState => {
            const { value } = this.state
            return {
                value: !value
            }
        })
        value ? clearInterval(this.timerID) : this.componentDidMount()
    }

    minusTimer = () => {
        this.setState(prevState => ({
            minutes: prevState.minutes - 1,
            seconds: 59
        }))
    }
    plusTimer = () => {
        this.setState(prevState => ({
            minutes: prevState.minutes + 1,
            seconds: 59
        }))
    }

    resetTime = () => {
        this.setState(prevState => ({
            minutes: 25,
            seconds: 59
        }))
    }


    render() {
        const { seconds, value, minutes } = this.state
        return (
            <div className="flex flex-col justify-center items-center h-screen text-center">
                <h1 className="text-3xl font-bold pb-10">Digital Timer</h1>

                <div className="flex flex-row items-center">
                    <div className="flex flex-row">
                        <div className="m-8">
                            <h1 className="text-3xl font-bold p-2 text-gray-500§">{minutes}:{seconds}</h1>
                            {value ? <p className='font-medium'>Running</p> : <p className='font-medium'>Pause</p>}
                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-row">
                            <button onClick={this.startPause} className='flex flex-row items-center pr-4'>
                                {value ? <img className='w-6' src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png" /> :
                                    <img className='w-6' src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png" />}

                                {value ? <p className='font-bold pl-2'>Start</p> : <p className='font-bold pl-2'>Pause</p>}
                            </button>
                            <button onClick={this.resetTime} className='flex flex-row items-center'>
                                <img className='w-6' src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png" />
                                <p className='font-bold pl-2'>Reset</p>
                            </button>
                        </div>
                        <p className='text-sm pt-4'>Set Timer limit</p>
                        <div className='flex flex-row'>
                            <button onClick={this.minusTimer} className='font-bold text-2xl'>-</button>
                            <button className='m-3 bg-green-500 px-6 py-2 rounded text-white font-bold'>{minutes}</button>
                            <button onClick={this.plusTimer} className='font-bold text-2xl'>+</button>
                        </div>
                    </div>

                </div>

            </div >
        )
    }
}

export default Comp1
