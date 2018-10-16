import React, { Component } from 'react';
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import BarRemark from 'component/common/bar-remark'
import { renderChart, deepCopyObject} from 'common/util'
import { hourConf } from 'common/chartConf'

const POINT_COLOR = {
  one:'今日数据',
  two:'昨日数据',
  three:'前7日均量',
}
export default class AreaChart extends Component{
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    this._setChartOptions()
  }
  _setChartOptions = _ => {
    const {  hoursList } = this.props;
    const option = deepCopyObject(hourConf);
    const { xAxis, series } = option ;
    hoursList.forEach(({dateHour,todayData,weekData,yesterdayData}) =>{
      xAxis.data.push(dateHour);
      series[0].data.push(todayData);
      series[1].data.push(yesterdayData);
      series[2].data.push(weekData);
    })
    renderChart(option,'hour_chart','bar')
  }
  render(){
    return (
        <div className='detail_bar_chart'>
          <div className='bar_chart_type' id='hour_chart'></div>
          <BarRemark {...POINT_COLOR}/>
        </div>
    );
  }
}
