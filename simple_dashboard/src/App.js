import React, { Component, useState, useEffect  } from 'react';

import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import * as d3 from "d3";

// import Icon from './FirstChart'
import BarChart from './BarChart'
import SecondChart from './SecondChart'
import BarChart2 from './BarChart2'
import country  from './country'
import Pie from './PieChart'
import { SimplePieChart } from "./SimplePieChart"
import BarChart3 from './BarChart3'
import BitcoinChart from './BitcoinChart'



function RandomData() {
  const data = [...Array(5)].map((e, i) => {
    return {
      x: Math.random() * 40,
      y: Math.random() * 40,
      temparature: Math.random() * 500
    };
  });
  return data;
}

const data = RandomData()

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }



  //get API data for Bitcoin price
  componentDidMount() {
    fetch(`https://api.coindesk.com/v1/bpi/historical/close.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: Object.keys(data.bpi).map(date => {
         return {
            date: new Date(date),
            price: data.bpi[date]
           };
        })
      });
    })
     .catch(error => console.log(error));
  }

   
    // state = {
    //   data1: [12, 5, 6, 6, 9, 10],
    //   width: 700,
    //   height: 500,
    //   id: "root"
    //   }

    render() {
    const { data } = this.state;
    return (
      //  <div className='App'>
      //  <div className='App-header'>
      //  <h2>Simple Dashboard</h2>
      <div>
      {/* <BarChart data={this.state.data1} width={this.state.width} height={this.state.height} /> */}
      <SecondChart/>
      {/* <BarChart2 width={600} height={400} data={data} /> */}
      <country/>
      <SimplePieChart />
      <h2 style={{ textAlign: "center" }}>
         30 day Bitcoin Price Chart
       </h2>
      <BitcoinChart data={data} />
      <BarChart3/>
      
      <Pie
            data={data}
            width={200}
            height={200}
            innerRadius={60}
            outerRadius={100}
          />
      </div>
      
    )
  }
};

export default App;




