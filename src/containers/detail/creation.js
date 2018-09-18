import React , { Fragment } from 'react';
import { connect } from 'react-redux'
// import { Menu, Icon, Button } from 'common/my_antd';
import { HOME } from 'constant/action-types'
import HourChart from 'component/detail/hour-chart'


@connect(
  state => ({
    collapsed: state.home.collapsed
  })
)
export default class LeftMenu extends React.Component {

  render() {
    const hour_arr = new Array(24).fill(1);
    return (
      <Fragment>
        <HourChart/>
        <div className='hour_data'>
          <ul className="data_left">
            <li>
              <p>日期</p>
              <p>今日数据</p>
              <p>昨日数据</p>
              <p>前7日数据</p>
            </li>
            <li>
              <p>日期</p>
              <p>今日数据</p>
              <p>昨日数据</p>
              <p>前7日数据</p>
            </li>
          </ul>
          <ul className="data_right">
            {
              hour_arr.map((v,i) =>
                  (
                    <li>
                      <p>{i}点段</p>
                      <p>100</p>
                      <p>80</p>
                      <p className='average_seven'>90</p>
                    </li>
                  )
                )
            }
          </ul>
        </div>
      </Fragment>
    );
  }
}
