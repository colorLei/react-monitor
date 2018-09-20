import React, {Fragment} from 'react';
import {connect} from 'react-redux'
import {HOME} from 'constant/action-types'
import LineChart from 'component/storage/line-chart'
import {default as cls} from 'classnames'

const chart_len = 4;
const chart_arr = new Array(9).fill(1);

@connect(state => ({collapsed: state.home.collapsed}))
export default class StorageChart extends React.Component {

    render() {
        return (
          <Fragment>
            <ul className='Storage_charts'>
                {chart_arr.map((v, i) => (
                    <li
                        className={cls({
                        'right_border': (i + 1) % 3 === 0
                    })}>
                        {i < chart_len && <LineChart id={`chart${++ i}`}/>}
                    </li>
                ))
}
            </ul>
            </Fragment>
        );
    }
}
