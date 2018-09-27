import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "echarts/lib/chart/line";
import { renderChart } from 'common/util'


const option = {
  xAxis: {
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','xxx','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','xxx'],
  },
  yAxis: {

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
    renderChart(option,id,'line')
  }
  render(){
    const { id } = this.props;
    return (
      <div className='area_chart'>
        <div className='data_show'>
          <div className='order_no'>
            <p>今日累计票量(国内)</p>
            {/* <Link to='/detail'><p>1 0 0 , 8 6 1</p></Link> */}
            <p>1 0 0 , 8 6 1</p>
          </div>
          <ul>
            <li>
              <label>旗舰店</label>
              <Link to='/detail'><span>88,888</span></Link>
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
