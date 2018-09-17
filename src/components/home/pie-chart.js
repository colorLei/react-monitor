import React, { Component } from 'react';
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie";
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';


const option = {
  series: [
      {
          name:'访问来源',
          type:'pie',
          radius: ['50%', '70%'],
          label:{
            formatter:'{b}\n{c}'
          },
          data:[
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
          ]
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
      <div className='pie_chart'>
        <div className='pie_data'>
          <label>工单创建总量</label>
          <span>20,000</span>
        </div>
        <div className='pie_charts'  id={id}></div>
      </div>
    );
  }
}
