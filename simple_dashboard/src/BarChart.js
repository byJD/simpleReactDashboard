import React, {Component} from 'react'
import './App.css'
import mapdata from './states'

import * as d3 from 'd3'


// class BarChart extends Component {


//     drawChart() {

//         const data = [12, 5, 6, 6, 9, 10];
        
//         const svg = d3.select("body")
//         .append("svg")
//         .attr("width", w)
//         .attr("height", h)
//         .style("margin-left", 100);
                      
//         svg.selectAll("rect")
//           .data(data)
//           .enter()
//           .append("rect")
//           .attr("x", (d, i) => i * 70)
//           .attr("y", (d, i) => h - 10 * d)
//           .attr("width", 65)
//           .attr("height", (d, i) => d * 10)
//           .attr("fill", "green")
    
//     }

//     componentDidMount(){
//         this.drawChart()
//     }

//     render(){
//         return <div id={"#" + this.props.id}></div>
//     }
// }



// export default BarChart

class BarChart extends Component {
  

    componentDidMount() {
        this.drawChart();
    }
        
    drawChart() {
        const data = this.props.data;
        const svg = d3.select("body").append("svg")
        .attr("width", this.props.width)
        .attr("height", this.props.height);
        
        const h = this.props.height;
        
        svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => h - 10 * d)
        .attr("width", 65)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "green")
        
        svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d) => d)
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => h - (10 * d) - 3)
        
        //selection.attr(“property”, (d, i) => {})
    }
        
    render(){
            return  <div id={"#" + this.props.id}></div>
    }
  }
      
  export default BarChart;