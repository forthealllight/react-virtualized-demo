import * as React from 'react';
import { Component } from 'react';
import { InfiniteLoader, List } from 'react-virtualized';
import * as loremIpsum from "lorem-ipsum"
const remoteRowCount=1000

let list = Array(10).fill(1).map(()=>{
  return loremIpsum({
        count: 1,
        units: 'sentences',
        sentenceLowerBound:3,
        sentenceUpperBound:3
    })
})

function isRowLoaded ({ index }) {
  return !!list[index];
}
function loadMoreRows ({ startIndex, stopIndex }) {
  return new Promise(function(resolve,reject){
    resolve()
  }).then(function(){
    let temList = Array(10).fill(1).map(()=>{
      return loremIpsum({
            count: 1,
            units: 'sentences',
            sentenceLowerBound:3,
            sentenceUpperBound:3
        })
    })
    list = list.concat(temList)
  })
}
function rowRenderer ({ key, index, style}) {
  return (
    <div
      key={key}
      style={style}
    >
      {list[index]}
    </div>
  )
}
export default class InfiniteList extends Component{
  render(){
    return (<InfiniteLoader
              isRowLoaded={isRowLoaded}
              loadMoreRows={loadMoreRows}
              rowCount={remoteRowCount}
              threshold={10}
            >
              {({ onRowsRendered, registerChild }) => (
                <List
                  height={200}
                  onRowsRendered={onRowsRendered}
                  ref={registerChild}
                  rowCount={remoteRowCount}
                  rowHeight={20}
                  rowRenderer={rowRenderer}
                  width={300}
                />
              )}
            </InfiniteLoader>
           )
  }
}
