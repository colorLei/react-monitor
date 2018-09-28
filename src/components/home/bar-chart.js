import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "echarts/lib/chart/bar";
import 'echarts/lib/component/legend';
import { renderChart, nfmt, deepCopyObject} from 'common/util'
import { barConf } from 'common/chartConf'

const AREA_COLOR = {
  "国内退票" : "#a33d42",
  "国际退票" : "#ce9b00",
  "国内改签" : "#7bd83a",
  "国际改签" : "#00aef6",
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
    const option = deepCopyObject(barConf);
    const { xAxis, series } = option ;
    labelName.forEach((v,i) =>{
      series[i].name = v;
      series[i].itemStyle = {
        color:AREA_COLOR[v]
      }
      data.forEach((param) =>{
        i === 0 && xAxis.data.push(param.name)
        series[i].data.push(param[`value${i+1}`])
      })
    })
    renderChart(option,id,'bar')
  }

  render(){
    const { id, type } = this.props;
    return (
      <div className='bar_chart'>
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
        <div className='charts'  id={id}></div>
      </div>
    );
  }
}
