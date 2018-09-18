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
  yAxis :
      {
          type : 'value',
          axisLine: {
            lineStyle: {
                color:'#868686'
            }
        },
      }
  ,
  series : [
      {
          name:'直接访问',
          type:'bar',
          barWidth: '30',
          data:[10, 52, 200, 334, 390, 330, 220],
          markLine : {
            lineStyle:{
              type:'solid',
              color:'#8bba45',
              width:3
            },
            data : [
              {
                name:"近7日均量",
                type : 'average',
                lineStyle:{
                  color:'#ce4441',
                },
              },
              {
                name:"近28日均量",
                yAxis: 100
              },
            ]
          },
        label: {
          normal: {
              show: true,
              position: 'top'
          }
        },
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
