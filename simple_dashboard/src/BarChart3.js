
import React, {Component} from 'react'
import './App.css'

import * as d3 from 'd3'

//using React to draw the chart, and D3 for the calculations 



class BarChart3 extends Component {

    componentDidMount() {
        const data = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 600;
        const h = 300;

        const svg = d3
        .select(this.refs.chart)
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .attr("class", "bar");

        svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("fill", "navy")
        .attr("class", "sBar")
        .attr("x", (d, i) => i * 60)
        .attr("y", (d, i) => {
            return h - 7 * d;
        })
        .attr("width", 50)
        .attr("height", (d, i) => 7 * d)
        .append("title")
        .text(d => d);

        svg
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .style("font-size", 18)
        .attr("fill", "red")
        .attr("x", (d, i) => i * 60)
        .attr("y", (d, i) => h - 7 * d - 3)
        .text(d => d);



    }
    render() {
        const styles = {
        container: {
            display: "grid",
            justifyItems: "center"
        }
        };
        return (
        <div ref="chart" style={styles.container}>
        </div>
        );
    }
}


export default BarChart3;