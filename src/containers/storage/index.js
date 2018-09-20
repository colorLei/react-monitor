import React, {Fragment} from 'react';
import {connect} from 'react-redux'
import {HOME} from 'constant/action-types'
import SelectGroup from 'component/detail/select-group'

const routes = [
  {
    name : '库存指标',
    path : '/storage/chart',
  },
  {
    name : '重点指标',
    path : '/storage/target',
  }
]
@connect(state => ({collapsed: state.home.collapsed}))
export default class LeftMenu extends React.Component {

    render() {
      const { Routes } = this.props;
        return (
            <Fragment>
                <div className='Storage_container'>
                    <SelectGroup routes={routes}/>
                </div>
                <Routes/>
            </Fragment>
        );
    }
}
