import React , { Fragment } from 'react';
import { connect } from 'react-redux'
import { DETAIL } from 'constant/action-types'
import HourChart from 'component/detail/hour-chart'
import TimeInterval from 'component/common/time-interval'

const activeNumber = ['One', 'Two', 'Three']
@connect(state => state.DETAIL)
export default class CREATION extends React.Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(nextProps){
    console.log(nextProps)
    console.log(this.props)
  }
  getHoursList(){
    const {dispatch,activeOne, activeTwo, activeThree} = this.props
    dispatch({
      type: DETAIL.GET_HOURS_LIST.toString(),
      data: {
        primaryType: activeOne.code,
        secondaryType: activeTwo.code,
        tertiaryType: activeThree.code,
        hostryMark:'2'
      },
      method: 'post'
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
