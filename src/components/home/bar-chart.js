import React, { Component } from 'react';
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';


const option = {
  textStyle: {
    color: '#fff'
},
  legend: {
      data:['直接访问','邮件营销'],
      right:5,
      textStyle:{
        color:'#fff'
      },
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis :{
      type : 'category',
      data : ['周一','周二','周三','周四','周五','周六','周日'],
      axisLine: {
        lineStyle: {
            color:'#868686'
        }
      },
      axisLabel:{
        rotate:45
      }
  },
  yAxis : {
    show:false
  },
  series : [
      {
          name:'直接访问',
          type:'bar',
          barWidth : 7,
          data:[320, 332, 301, 334, 390, 330, 320],
          label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
      },
      {
          name:'邮件营销',
          type:'bar',
          stack: '广告',
          barWidth : 7,
          data:[120, 132, 101, 134, 90, 230, 210],
          label: {
            normal: {
                show: true,
                position: 'top'
            }
          },
          itemStyle:{
            color:'#7bd83a'
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
    const myChart = echarts.init(document.getElementById(id));
    console.log(myChart)
    myChart.setOption(option)
  }
  render(){
    const { id } = this.props;
    return (
      <div className='bar_chart'>
        <ul>
          <li>
            <label>国内订单总量</label>
            <span>20,000</span>
          </li>
          <li>
            <label>国内订单总量</label>
            <span>20,000</span>
          </li>
          <li>
            <label>国内订单总量</label>
            <span>20,000</span>
          </li>
          <li>
            <label>国内订单总量</label>
            <span>20,000</span>
          </li>
        </ul>
        <div className='charts'  id={id}></div>
      </div>
    );
  }
}
