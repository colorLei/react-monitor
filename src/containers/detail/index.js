import React , { Fragment } from 'react';
import { connect } from 'react-redux'
// import { Menu, Icon, Button } from 'common/my_antd';
import { HOME } from 'constant/action-types'
import SelectGroup from 'component/detail/select-group'
import Selects from 'component/common/selects'
import Tendency from './tendency'
import Creation from './creation'

@connect(
  state => ({
    collapsed: state.home.collapsed
  })
)
export default class LeftMenu extends React.Component {

  render() {

    return (
      <Fragment>
        <div className='detail_top'>
          <div className='title'>
            <label>数据详情：</label>
            <span>国内-票量-全部</span>
          </div>
          <SelectGroup/>
        </div>
        {/* <Tendency/> */}
        <Creation/>
        <Selects/>
      </Fragment>
    );
  }
}

