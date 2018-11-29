import * as React from "react";
import * as CSSModules from "react-css-modules";
import { Component } from 'react';
// import * as styles from './index.less';
import VirtualList from 'react-tiny-virtual-list';
const data = ['A', 'B', 'C', 'D', 'E', 'F','A', 'B', 'C',
'D', 'E', 'F','A', 'B', 'C', 'D', 'E', 'F',
'A', 'B', 'C', 'D', 'E', 'F'];
export default class TinyVirtual extends Component {
  render(){
    return <VirtualList
            width='100%'
            height={200}
            itemCount={data.length}
            itemSize={50} // Also supports variable heights (array or function getter)
            renderItem={({index, style}) =>
              <div key={index} style={style}>
                // The style property contains the item's absolute position Letter: {data[index]}, Row: #{index}
              </div>
            }
            />
  }
}
