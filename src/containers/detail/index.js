import React , { Fragment } from 'react';
import { connect } from 'react-redux'
// import { Menu, Icon, Button } from 'common/my_antd';
import { HOME } from 'constant/action-types'
import SelectGroup from 'component/detail/select-group'
import Selects from 'component/common/selects'


const routes = [
  {
    name : '历史趋势',
    path : '/detail/tendency',
  },
  {
    name : '小时创建',
    path : '/detail/creation',
  }
]
@connect(
  state => ({
    collapsed: state.home.collapsed
  })
)
export default class LeftMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const { Routes } = this.props;

    return (
      <Fragment>
        <div className='detail_top'>
          <div className='title'>
            <label>数据详情：</label>
            <span>国内-票量-全部</span>
          </div>
          <SelectGroup routes={routes}/>
        </div>
        <Routes/>
        <Selects/>
      </Fragment>
    );
  }
}

