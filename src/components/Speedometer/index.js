// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    console.log('onAccelerate Triggered')
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onApplyBrake = () => {
    console.log('onApplyBrake Triggered')
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
          className="img"
        />
        <div>
          <h1 className="speed-read">
            Speed is <span>{count}</span>mph
          </h1>
          <p className="speed-limit">Min limit 0mph, Max limit 200mph</p>
          <div className="btn-container">
            <button
              type="button"
              className="button btn1"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="button btn2"
              onClick={this.onApplyBrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
