import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "echarts/lib/chart/line";
import 'echarts/lib/component/tooltip';
import {renderChart, nfmt, numWithSpace, deepCopyObject} from 'common/util'
import {AreaConf} from 'common/chartConf'
import { selectAll, routerConf } from 'common/config'

const AREA_COLOR = {
    "gn": "#a33d42",
    "gj": "#ce9b00"
}

export default class AreaChart extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this._setChartOptions()
    }
    componentWillReceiveProps(){
      this._setChartOptions()
    }
    _setChartOptions = _ => {
        const {id, data, levelOne: {code}} = this.props;
        const option = data.reduce((init, {name, value}) => {
            const {data, areaStyle} = init.series[0];
            init
                .xAxis
                .data
                .push(name)
            data.push(value)
            areaStyle.color = AREA_COLOR[code]
            return init;
        }, deepCopyObject(AreaConf))

        renderChart(option, id, 'line')
    }
    render() {
        const {id, type, levelOne, levelTwo} = this.props;
        return (
            <div className='area_chart'>
                <div className='data_show'>
                    <div className='order_no'>
                        <p>今日累计{levelTwo.name}({levelOne.name})</p>
                        <Link
                            to={{
                            pathname: `${routerConf.detail}${levelOne.code}/${levelTwo.code}/${selectAll.code}`,
                            state: {
                                activeOne:levelOne,
                                activeTwo:levelTwo,
                                activeThree:selectAll
                            }
                        }}>{numWithSpace(levelTwo.value)}</Link>
                    </div>
                    <ul>
                        {type.map(({name, value, code}) => (
                            <li>
                                <label>{name}</label>
                                <Link to={{
                            pathname: `${routerConf.detail}${levelOne.code}/${levelTwo.code}/${code}`,
                            state: {
                                activeOne:levelOne,
                                activeTwo:levelTwo,
                                activeThree:{
                                  code,
                                  name
                                }
                            }
                        }}>
                                    <span>{nfmt(value)}</span>
                                </Link>
                            </li>
                        ))
}
                    </ul>
                </div>
                <div className='charts' id={id}></div>
            </div>
        );
    }
}
