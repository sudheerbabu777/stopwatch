// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isActive: false,
    time: 0,
  }

  componentDidCatch() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.timer)

  updateTime = () => {
    this.setState(prevState => ({
      time: prevState.time + 1,
    }))
  }

  onClickStart = () => {
    this.timer = setInterval(this.updateTime, 1000)
    this.setState({isActive: true})
  }

  onClickStop = () => {
    this.clearTimerInterval()
    this.setState({isActive: false})
  }

  onClickReset = () => {
    this.clearTimerInterval()
    this.setState({isActive: false, time: 0})
  }

  render() {
    const {isActive, time} = this.state
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    const stringifyMinutes = minutes > 10 ? minutes : `0${minutes}`
    const stringifySeconds = seconds > 10 ? seconds : `0${seconds}`

    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">StopWatch</h1>
          <div className="box-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stopWatch"
              />
              <p className="timer">Timer</p>
            </div>
            <h1 className="stop-watch">{`${stringifyMinutes}:${stringifySeconds}`}</h1>
            <div className="button-container">
              <button
                className="button start"
                type="button"
                onClick={this.onClickStart}
                disabled={isActive}
              >
                Start
              </button>
              <button
                className="button stop"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="button reset"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
