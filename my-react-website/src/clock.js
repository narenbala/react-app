import React, { Component } from 'react'
import './clock.css'

export default class clock extends Component {

  state = {
    secFormula: 0,
    minFormula: 0,
    hourFormula: 0
  }
  componentDidMount() {
    setInterval(() => {
      this.setClock()
    }, 1000)
  }

  setClock = () => {
    const time = new Date;
    const sec = time.getSeconds();
    const mins = time.getMinutes();
    const hrs = (time.getHours() + 24) % 12 || 12;

    let secFormula = sec * 6;
    let minFormula = (mins * 6) + sec * 0.1;
    let hourFormula = hrs * 30 + (mins * 0.5) + (sec * (0.5 / 60));

    this.setState({
      secFormula,
      minFormula,
      hourFormula
    })
  }

  render() {
    const { secFormula, minFormula, hourFormula } = this.state
    return (
      <div className='outer'>
        <div className='clock'>
          <div className='hand-hours' style={{ transform: `rotateZ(${hourFormula}deg)` }}>
            <div className='hours'></div>
          </div>

          <div className='hand-minute' style={{ transform: `rotateZ(${minFormula}deg)` }}>
            <div className='minute'></div>
          </div>

          <div className='hand-second' style={{ transform: `rotateZ(${secFormula}deg)` }}>
            <div className='second'></div>
          </div>

        </div>

      </div>
    )
  }
}
