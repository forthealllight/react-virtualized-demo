import * as Immutable from 'immutable';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { CellMeasurer ,CellMeasurerCache,List } from 'react-virtualized';
import * as styles from './index.less';
interface IProps{
  width?:number|string,
  getClassName?:any,
  list?:any
}
interface IState{

}
export default class DynamicHeightList extends React.PureComponent<IProps,IState> {
  _cache:any
  constructor(props, context) {
    super(props, context);

    this._cache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 50,
    });

    this._rowRenderer = this._rowRenderer.bind(this);
  }

  render() {
    const {width} = this.props;

    return (
      <List
        className={styles["BodyGrid"]}
        deferredMeasurementCache={this._cache}
        height={400}
        overscanRowCount={3}
        rowCount={1000}
        rowHeight={this._cache.rowHeight}
        rowRenderer={this._rowRenderer}
        width={300}
      />
    );
  }

  _rowRenderer({index, key, parent, style}) {
    const {getClassName, list} = this.props;

    const datum = list.get(index % list.size);
    const classNames = getClassName({columnIndex: 0, rowIndex: index});

    const imageWidth = 300;
    const imageHeight = datum.size * (1 + index % 3);

    const source = `https://fillmurray.com/${imageWidth}/${imageHeight}`;

    return (
      <CellMeasurer
        cache={this._cache}
        columnIndex={0}
        key={key}
        rowIndex={index}
        parent={parent}>
        {({measure}) => (
          <div className={classNames} style={style}>
            <img
              onLoad={measure}
              src={source}
              style={{
                width: imageWidth,
              }}
            />
          </div>
        )}
      </CellMeasurer>
    );
  }
}
