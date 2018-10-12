import React, { Component } from 'react';


export default class TimeInterval extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    const {hoursList} = this.props
    return (
      <div className='time_interval'>
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
              hoursList.map(({dateHour,todayData,yesterdayData,weekData}) =>
                  (
                    <li>
                      <p>{dateHour}</p>
                      <p>{todayData}</p>
                      <p>{yesterdayData}</p>
                      <p className='average_seven'>{weekData}</p>
                    </li>
                  )
                )
            }
          </ul>
        </div>
    );
  }
}
