import React, { Component } from 'react';
import "echarts/lib/chart/bar";
import "echarts/lib/component/markLine";
import BarRemark from 'component/common/bar-remark'
import { renderChart, deepCopyObject} from 'common/util'
import { tendencyConf } from 'common/chartConf'
import { dfmt } from 'common/util'

const POINT_COLOR = {
  one:'近7日数据',
  two:'近7日均量',
  three:'前28日均量',
}
export default class Tendency extends Component{
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this._setChartOptions()
  }
  _setChartOptions = _ => {
    const {  tendencyDetail:{nearlyMonth,days} } = this.props;
    const option = deepCopyObject(tendencyConf);
    const { xAxis, series } = option ;
    series[0].markLine.data[1].yAxis = nearlyMonth;
    days.forEach(({ticketdate,count}) =>{
      xAxis.data.push(dfmt(ticketdate,'MM.DD'));
      series[0].data.push(count);
    })
    renderChart(option,'tendency_chart','bar')
  }

  render(){
    return (
        <div className='detail_bar_chart'>
          <div className='bar_chart_type' id='tendency_chart'></div>
          <BarRemark {...POINT_COLOR}/>
        </div>
    );
  }
}
