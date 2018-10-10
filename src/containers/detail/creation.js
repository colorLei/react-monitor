import React , { Fragment } from 'react';
import { connect } from 'react-redux'
import { DETAIL } from 'constant/action-types'
import HourChart from 'component/detail/hour-chart'
import TimeInterval from 'component/common/time-interval'
@connect(
  state => ({
    hoursList: state.DETAIL.hoursList
  })
)
export default class CREATION extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){
    this.getHoursList()
  }
  getHoursList(){
    const {dispatch} = this.props
    dispatch({
      type: DETAIL.GET_HOURS_LIST.toString()
    })
  }
  render() {
    const {hoursList} = this.props
    return (
      <Fragment>
        <HourChart hoursList={hoursList}/>
        <TimeInterval hoursList={hoursList}/>
      </Fragment>
    );
  }
}
