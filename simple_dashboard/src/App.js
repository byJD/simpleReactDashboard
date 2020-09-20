import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Icon from './FirstChart'
import BarChart from './BarChart'
import SecondChart from './SecondChart'
import BarChart2 from './BarChart2'
import country  from './country'


const   data = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [60, 30, 40, 20, 30]
]

class App extends Component {


  
  


state = {
  data: [12, 5, 6, 6, 9, 10],
  width: 700,
  height: 500,
  id: "root"
  }

  render() {
  return (
    //  <div className='App'>
    //  <div className='App-header'>
    //  <h2>Simple Dashboard</h2>
     <div>
     <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />
     <SecondChart/>
     <BarChart2 width={600} height={400} data={data} />
     <country/>
     </div>
  )
  }
}

export default App;




