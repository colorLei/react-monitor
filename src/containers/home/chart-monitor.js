import React ,{ Fragment } from 'react';
import { connect } from 'react-redux'
import {HOME} from 'constant/action-types'
import AreaChart from 'component/home/area-chart'
import BarChart from 'component/home/bar-chart'
import PieChart from 'component/home/pie-chart'

const MS = 60*1000;
@connect(
  state => state.HOME.chartsList
)
export default class ChartMonitor extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.getChartsList();
    this._Refresh()
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  getChartsList = _ => {
    const {dispatch} = this.props
    dispatch({
      type: HOME.GET_CHARTS_LIST.toString()
    })
  }
  _Refresh = _ => {
    this.timer = setInterval(_ =>{
      this.getChartsList();
    },MS)
  }
  render() {
    const  { line, bar, pie }= this.props
    return (
      <Fragment>
        <div className='chart-line'>
            <div className='left-line'>
              {
                line.map((v,i) => (
                  <AreaChart id={'lineChart'+i} {...v} key={v.levelOne.name}/>
                ))
              }
            </div>
            <div className='right-line'>
              {
                bar.map((v,i) => (
                  <BarChart id={'barChart'+i} {...v} key={v.levelOne.name}/>
                ))
              }
            </div>
        </div>
        <div className='chart-round'>
          {
            pie.map((v,i) => (
              <PieChart id={'pieChart'+i} {...v} key={v.category.name}/>
            ))
          }
        </div>
      </Fragment>
    );
  }
}
