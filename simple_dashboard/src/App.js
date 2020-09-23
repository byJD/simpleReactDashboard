import React, { Component, useState, useEffect  } from 'react';

import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import * as d3 from "d3";



import Scatter from './Scatter'
import SimplePieChart from "./SimplePieChart"
import BarChart3 from './BarChart3'
import BitcoinChart from './BitcoinChart'




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
     d3.csv("./housing.csv", function(d) {
      return {
        x : d.longitude,
        y : d.latitude,
      };
    });
  }

    render() {
      const { data } = this.state;
      
      
      return (
   
        <div className='Graphs'>
      
        <h2 style={{ textAlign: "center" }}>
          Scatter plot
        </h2>
        <Scatter/>  {/*scatter plot */}
 
      
  
        <h2 style={{ textAlign: "center" }}>
            Pie Chart
        </h2>
        <SimplePieChart />  {/*pie chart */}

        <h2 style={{ textAlign: "center" }}>
          30 day Bitcoin Price Chart
        </h2>
        <BitcoinChart data={data} />  {/*bitcoin plot */}

        <h2 style={{ textAlign: "center" }}>
            Bar chart
        </h2>
        <BarChart3/>  {/* bar chart */}
  
        </div>
        
      )

    }
};

export default App;




