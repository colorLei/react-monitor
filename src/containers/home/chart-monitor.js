import React ,{ Fragment } from 'react';
import { connect } from 'react-redux'
import AreaChart from 'component/home/area-chart'

@connect(
  state => ({
    collapsed: state.home.collapsed
  }),
  // dispatch => ({dispatch})
)
export default class ChartMonitor extends React.Component {
  render() {
    const { dispatch ,collapsed} = this.props
    return (
      <Fragment>
        <div className='chart-line'>
            <AreaChart/>
            {/* <AreaChart id='chart2'/>
            <AreaChart id='chart3'/>
            <AreaChart id='chart4'/> */}
        </div>
        <div className='chart-round'>
              3333
        </div>
      </Fragment>
    );
  }
}
