import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "echarts/lib/chart/line";
import { renderChart, nfmt, numWithSpace, deepCopyObject} from 'common/util'
import { AreaConf } from 'common/chartConf'

const AREA_COLOR = {
  "国内" : "#a33d42",
  "国际" : "#ce9b00",
}

export default class AreaChart extends Component{
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this._setChartOptions()
  }
  _setChartOptions = _ => {
    const { id, data, name: labelName} = this.props;
    const option = data.reduce((init, {name,value}) =>{
      const {data,areaStyle} = init.series[0];
      init.xAxis.data.push(name)
      data.push(value)
      areaStyle.color = AREA_COLOR[labelName]
      return init;
    },deepCopyObject(AreaConf))

    renderChart(option,id,'line')
  }
  render(){
    const { id, type, name, accumuOrderNO} = this.props;
    return (
      <div className='area_chart'>
        <div className='data_show'>
          <div className='order_no'>
            <p>今日累计票量({name})</p>
            <Link to={{
  pathname: '/detail',
  state: { levelOne: {name:'国内',code:1} }
}}>{numWithSpace(accumuOrderNO)}</Link>
          </div>
          <ul>
            {
              type.map(({name,accumuOrderNO}) => (
                <li>
                  <label>{name}</label>
                  <Link to='/detail'><span>{nfmt(accumuOrderNO)}</span></Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='charts'  id={id}></div>
      </div>
    );
  }
}
