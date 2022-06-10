import React, { Component } from 'react'
import './clock.css'

export default class clock extends Component {

    state = {
        secFormula: 0,
        minFormula: 0,
        hourFormula: 0
    }
    componentDidMount () {
        setInterval(()=> {
            this.setClock()
        },1000)
    }

  setClock = () => {
    const time = new Date;
    let secFormula = time.getSeconds() * 6;
    let minFormula = time.getMinutes() * 6;
    let hourFormula = (time.getHours() * 30) + (time.getMinutes() * 0.5);

    this.setState({secFormula: secFormula})
    this.setState({minFormula: minFormula})
    this.setState({hourFormula: hourFormula})
   }

    render() {    
           const { secFormula, minFormula, hourFormula} = this.state
    return (
        <div className='outer'>
        <div className='clock'>
        <div className='hand-hours'   style={{transform: `rotateZ(${hourFormula}deg)`}}>
            <div className='hours'></div>
          </div>
          
          <div className='hand-minute'  style={{transform: `rotateZ(${minFormula}deg)`}}>
            <div className='minute'></div>
          </div>
     
          <div className='hand-second'   style={{transform: `rotateZ(${secFormula}deg)`}}>
            <div className='second'></div> 
          </div>
          
        </div>
        
        </div>
    )
  }
}
