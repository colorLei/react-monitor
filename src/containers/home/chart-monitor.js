import React ,{ Fragment } from 'react';
import { connect } from 'react-redux'
import AreaChart from 'component/home/area-chart'
import BarChart from 'component/home/bar-chart'
import PieChart from 'component/home/pie-chart'

@connect(
)
export default class ChartMonitor extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='chart-line'>
            <div className='left-line'>
              <AreaChart id='chart1'/>
              <AreaChart id='chart2'/>
            </div>
            <div className='right-line'>
              <BarChart id='chart3'/>
              <BarChart id='chart4'/>
            </div>
        </div>
        <div className='chart-round'>
          <PieChart id='chart5'/>
          <PieChart id='chart6'/>
          <PieChart id='chart7'/>
        </div>
      </Fragment>
    );
  }
}
