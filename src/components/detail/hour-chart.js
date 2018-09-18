import React, { Component } from 'react';
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/markLine";
import BarRemark from 'component/common/bar-remark'

const option = {
  color: ['#467dc2'],
  textStyle: {
    color: '#fff'
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis : {
     type : 'category',
        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
          lineStyle: {
          color:'#868686'
          }
        },
        axisLabel:{
          rotate:45
        }
    }
  ,
  yAxis :[
    {
        type : 'value',
        axisLine: {
          lineStyle: {
              color:'#868686'
          }
      },
    },
    {
      type: 'value',
      name: '温度',
    }
  ],
  series : [
      {
          name:'直接访问',
          type:'bar',
          barWidth: '30',
          data:[10, 52, 200, 334, 390, 330, 220],
          label: {
            normal: {
              show: true,
              position: 'top'
          }
        },
      },
      {
        name:'平均温度',
        type:'line',
        data:[20, 62, 210, 344, 395, 337, 229],
        lineStyle:{
          color:'#84c816'
        }
      },
      {
        name:'平均温度',
        type:'line',
        data:[25, 68, 218, 354, 399, 339, 239],
        lineStyle:{
          color:'#d5362e'
        }
      }
  ]
};

export default class AreaChart extends Component{
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    const { id } = this.props;
    const myChart = echarts.init(document.getElementById('bar_chart'));
    console.log(myChart)
    myChart.setOption(option)
  }
  render(){
    const { id } = this.props;
    return (
        <div className='detail_bar_chart'>
          <div id='bar_chart'></div>
          <BarRemark/>
        </div>
    );
  }
}
