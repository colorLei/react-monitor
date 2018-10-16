import React , { Fragment } from 'react';
import { connect } from 'react-redux'
import BarChart from 'component/detail/bar-chart'
import { detailMixins } from 'common/mixins'
import { dfmt } from 'common/util'
import {default as cls} from 'classnames'

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
            days.map(({ticketdate,count},i) =>(
              <li>
                <h3>{dfmt(ticketdate,'MM.DDddd')}
                {i === days.length -1 && <span> (当前)</span>}</h3>
                <p className={cls({'current':i === days.length -1})}>{count}</p>
              </li>
            ))
          }
        </ul>
      </Fragment>
    );
  }
}
