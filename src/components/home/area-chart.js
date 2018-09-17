import React, { Component } from 'react';
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";


const option = {
  textStyle: {
      color: '#fff'
  },
  xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','xxx','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','xxx'],
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
      data: [820, 932, 901, 934, 7000, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
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
      <div className='area_chart'>
        <div className='data_show'>
          <div className='order_no'>
            <p>今日累计票量(国内)</p>
            <p>1 0 0 , 8 6 1</p>
          </div>
          <ul>
            <li>
              <label>旗舰店</label>
              <span>88,888</span>
            </li>
            <li>
              <label>xx</label>
              <span>88,888</span>
            </li>
            <li>
              <label>旗舰店</label>
              <span>88,888</span>
            </li>
            <li>
              <label>旗舰店</label>
              <span>88,888</span>
            </li>
          </ul>
        </div>
        <div className='charts'  id={id}></div>
      </div>
    );
  }
}
