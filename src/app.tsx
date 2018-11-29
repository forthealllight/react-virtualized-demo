import * as React from "react";
import Hello from './components/Hello'
import {render} from "react-dom";
import TinyVirtual from './components/tiny-virtual'
import ImgDynamicVirtual from "./components/react-virtual/imgDynamicBaseList"
import TextDynamicList from "./components/react-virtual/textDynamicList"
import InfiniteList from "./components/react-virtual/infiniteList"
const rootEl = document.getElementById("root");
render(
  <TextDynamicList/>,
  rootEl
)
// const list = [
//   ['Jony yu', 'Software Engineer', 'Shenzhen', 'CHINA', 'GUANGZHOU'],
//   ['Jony yu', 'Software Engineer', 'Shenzhen', 'CHINA', 'GUANGZHOU'],
//   ['Jony yu', 'Software Engineer', 'Shenzhen', 'CHINA', 'GUANGZHOU'],
//   ['Jony yu', 'Software Engineer', 'Shenzhen', 'CHINA', 'GUANGZHOU'],
//   ['Jony yu', 'Software Engineer', 'Shenzhen', 'CHINA', 'GUANGZHOU'],
//   ['Jony yu', 'Software Engineer', 'Shenzhen', 'CHINA', 'GUANGZHOU']
// ];
//
// function cellRenderer ({ columnIndex, key, rowIndex, style }) {
//   return (
//     <div
//       key={key}
//       style={style}
//     >
//       {list[rowIndex][columnIndex]}
//     </div>
//   )
// }
// render(
//   <Grid
//    cellRenderer={cellRenderer}
//    columnCount={list[0].length}
//    columnWidth={100}
//    height={300}
//    rowCount={list.length}
//    rowHeight={80}
//    width={300}
//   />,
//   rootEl
// );
