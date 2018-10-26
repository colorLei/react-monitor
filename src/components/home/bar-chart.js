import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "echarts/lib/chart/bar";
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import { renderChart, nfmt, deepCopyObject} from 'common/util'
import { barConf } from 'common/chartConf'
import { selectAll, routerConf } from 'common/config'

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
  componentWillReceiveProps(){
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
    const { id, type, levelOne } = this.props;
    return (
      <div className='bar_chart'>
        <ul>
        {
          type.map(({name,value,code}) => (
            <li>
              <label>{name}</label>
                <Link to={{
                            pathname:`${routerConf.detail}${levelOne.code}/${code}/${selectAll.code}`,
                            state: {
                                activeOne:levelOne,
                                activeTwo:{name,code},
                                activeThree:selectAll
                            }
                    }}><span>{nfmt(value)}</span></Link>
             </li>
           ))
        }
        </ul>
        <div className='charts'  id={id}></div>
      </div>
    );
  }
}
