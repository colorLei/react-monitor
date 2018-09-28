import React, { Component } from 'react';
import "echarts/lib/chart/bar";
import "echarts/lib/component/markLine";
import BarRemark from 'component/common/bar-remark'
import { renderChart, deepCopyObject} from 'common/util'
import { tendencyConf } from 'common/chartConf'

export default class Tendency extends Component{
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    renderChart(deepCopyObject(tendencyConf),'tendency_chart','bar')
  }
  render(){
    return (
        <div className='detail_bar_chart'>
          <div className='bar_chart_type' id='tendency_chart'></div>
          <BarRemark/>
        </div>
    );
  }
}
