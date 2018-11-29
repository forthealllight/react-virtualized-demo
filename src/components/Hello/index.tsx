import * as React from "react";
import * as CSSModules from "react-css-modules";
import { Component } from 'react';
import * as styles from './index.less';

export default class Hello extends Component {
  render(){
    return <div className={styles["hello"]}>
           <div className={styles["hello_child"]}>111</div>
    </div>
  }
}
