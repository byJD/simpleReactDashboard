import React, {Component} from 'react'
import './App.css'

import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'
import { select } from 'd3-selection'

import * as d3 from 'd3'

function RandomData() {
    const data = [...Array(200)].map((e, i) => {
      return {
        x: Math.random() * 40,
        y: Math.random() * 40,
        temparature: Math.random() * 500
      };
    });
    return data;
  }

  function X_Axies({ yScale, width }) {
    const axis = yScale.ticks(5).map((d, i) => (
      <g key={i} className="y-tick">
        <line
          style={{ stroke: "#e4e5eb" }}
          y1={yScale(d)}
          y2={yScale(d)}
          x2={width}
        />
        <text style={{ fontSize: 12 }} x={-20} dy=".32em" y={yScale(d)}>
          {d}
        </text>
      </g>
    ));
    return <>{axis}</>;
  }

  function Y_Axies({ xScale, height }) {
    const textPadding = 10;
  
    const axis = xScale.ticks(10).map((d, i) => (
      <g className="x-tick" key={i}>
        <line
          style={{ stroke: "#e4e5eb" }}
          y1={0}
          y2={height}
          x1={xScale(d)}
          x2={xScale(d)}
        />
        <text
          style={{ textAnchor: "middle", fontSize: 12 }}
          dy=".71em"
          x={xScale(d)}
          y={height + textPadding}
        >
          {d}
        </text>
      </g>
    ));
    return <>{axis}</>;
  }
  
  function Scatter() {
    const data = RandomData(),
      w = 600,
      h = 600,
      margin = {
        top: 40,
        bottom: 40,
        left: 40,
        right: 40
      };
  
    const width = w - margin.right - margin.left,
      height = h - margin.top - margin.bottom;
  
    const xScale = scaleLinear()
      .domain(extent(data, d => d.x))
      .range([0, width]);
  
    const yScale = scaleLinear()
      .domain(extent(data, d => d.y))
      .range([height, 0]);
  
    const circles = data.map((d, i) => (
      <circle
        key={i}
        r={5}
        cx={xScale(d.x)}
        cy={yScale(d.y)}
        style={{ fill: "lightblue"}}
      />
    ));
  
    return (
      <div>
        <svg width={w} height={h}>
          <g transform={`translate(${margin.left},${margin.top})`}>
          <X_Axies yScale={yScale} width={width} />
          <Y_Axies xScale={xScale} height={height} />
            {circles}
            {}
          </g>
        </svg>
      </div>
    );
  }
  
  export default Scatter;