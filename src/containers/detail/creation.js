import React , { Fragment } from 'react';
import { connect } from 'react-redux'
// import { Menu, Icon, Button } from 'common/my_antd';
import { HOME } from 'constant/action-types'
import HourChart from 'component/detail/hour-chart'
import TimeInterval from 'component/common/time-interval'
@connect(
  // state => ({
  //   collapsed: state.home.collapsed
  // })
)
export default class LeftMenu extends React.Component {

  render() {
    return (
      <Fragment>
        <HourChart/>
        <TimeInterval/>
      </Fragment>
    );
  }
}
