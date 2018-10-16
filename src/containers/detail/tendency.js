import React , { Fragment } from 'react';
import { connect } from 'react-redux'
import BarChart from 'component/detail/bar-chart'
import { detailMixins } from 'common/mixins'
import { dfmt } from 'common/util'

const HOUR = '1';
@connect(state => state.DETAIL)
@detailMixins(HOUR)
export default class LeftMenu extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {tendencyDetail:{weekData,nearlyMonth,days}} = this.props;
    return (
      <Fragment>
        {days.length>0 && <BarChart tendencyDetail={this.props.tendencyDetail}/>}
        <ul className='detail_average'>
          <li>
            <h3>近28日均量</h3>
            <p>{nearlyMonth}</p>
          </li>
          <li>
            <h3>近7日均量</h3>
            <p>{weekData}</p>
          </li>
          {
            days.map(({ticketdate,count}) =>(
              <li>
                <h3>{dfmt(ticketdate,'MM.DD')}</h3>
                <p>{count}</p>
              </li>
            ))
          }
        </ul>
      </Fragment>
    );
  }
}
