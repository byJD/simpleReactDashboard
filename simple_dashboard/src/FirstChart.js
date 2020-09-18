import React, { Component } from 'react'
import './App.css'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'


//display a gold rectangle 
const Svg = () => {
    return (
      <svg style={{
        border: "2px solid gold"
      }} />
    )
  }
export default Svg


//display a circle
// const Circle =  () => {
//   return (
//     <svg>
//       <circle
//         cx = "150"
//         cy = "77"
//         r = "40"
//       />
//     </svg>
//   )
// }

// export default Circle

// const Circles = () => {
//   const [dataset, setDataset] = useState(
//     generateDataset()
//   )

//   useInterval (() => {
//     const newDataset = generateDataset()
//     setDataset(newDataset)
//   }, 2000)

//   return (
//     <svg viewBox = "0 0 100 50">
//       {dataset.map(([x, y], i) => (
//         <circle

//           cx = {x}
//           cy = {y}
//           r = "3"
//         />
//       ))}
//     </svg>
//   )
// }