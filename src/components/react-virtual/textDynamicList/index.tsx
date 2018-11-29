import * as React from "react";
import * as CSSModules from "react-css-modules";
import { Component } from 'react';
import { List,AutoSizer,CellMeasurer, CellMeasurerCache} from 'react-virtualized';
import * as loremIpsum from "lorem-ipsum"
const rowCount = 1000;
const list = Array(rowCount).fill(0).map(()=>{
  return loremIpsum({
        count: 1,
        units: 'sentences',
        sentenceLowerBound: 10,
        sentenceUpperBound: 10
      })
})
function rowRenderer ({
  key,         // Unique key within array of rows
  index,       // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible,   // This row is visible within the List (eg it is not an overscanned row)
  style        // Style object to be applied to row (to position it)
}) {
  return (
    <div
      key={key}
      style={style}
    >
      {list[index]}
    </div>
  )
}
const cache = new CellMeasurerCache({ defaultHeight: 30,fixedWidth: true});

function cellRenderer ({ index, key, parent, style }) {
  console.log(index)

  return (
    <CellMeasurer
      cache={cache}
      columnIndex={0}
      key={key}
      parent={parent}
      rowIndex={index}
    >
      <div
        style={style}
      >
        {list[index]}
      </div>
    </CellMeasurer>
  );
}

export default class TestList extends Component{
  render(){
    return <div style={{width:"240px",height:"80px",padding:"15px",border:"4px double #beceeb",resize:"both",overflow:"auto"}}>
             <AutoSizer>
              {({ height, width }) => (
                <List
                  height={height}
                  rowCount={list.length}
                  rowHeight={cache.rowHeight}
                  deferredMeasurementCache={cache}
                  rowRenderer={cellRenderer}
                  width={width}
                />
              )}
            </AutoSizer>
          </div>
  }
}
