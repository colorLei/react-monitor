import React, { Component } from 'react';
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import BarRemark from 'component/common/bar-remark'
import { renderChart, deepCopyObject} from 'common/util'
import { hourConf } from 'common/chartConf'


export default class AreaChart extends Component{
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    renderChart(deepCopyObject(hourConf),'hour_chart','bar')
  }
  render(){
    return (
        <div className='detail_bar_chart'>
          <div className='bar_chart_type' id='hour_chart'></div>
          <BarRemark/>
        </div>
    );
  }
}
