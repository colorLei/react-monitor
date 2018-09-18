import React, { Component, Fragment } from 'react';
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";


const option = {
  textStyle: {
    color: '#ccc'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
},
  xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: {
        lineStyle: {
            color:'#868686'
        }
      },
      axisLabel:{
        rotate:45
      }
  },
  yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
            color:'#868686'
        }
    },
  },
  series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      lineStyle:{
        color:'#4974c7'
      },
      itemStyle:{
        opacity:0
      }
  }]
};

export default class AreaChart extends Component{
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    const { id } = this.props;
    const myChart = echarts.init(document.getElementById(id));
    console.log(myChart)
    myChart.setOption(option)
  }
  render(){
    const { id } = this.props;
    return (
      <Fragment>
        <div className='group_data'>
          <label>分销产品运营——出票</label>
          <span>1 0 0 , 8 6 1 </span>
        </div>
        <div className='charts' id={id}></div>
      </Fragment>
    );
  }
}
