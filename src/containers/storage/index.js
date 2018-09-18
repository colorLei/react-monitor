import React, {Fragment} from 'react';
import {connect} from 'react-redux'
import {HOME} from 'constant/action-types'
import SelectGroup from 'component/detail/select-group'
import StorageChart from './storage-chart'
import StorageTarget from './storage-target'

@connect(state => ({collapsed: state.home.collapsed}))
export default class LeftMenu extends React.Component {

    render() {
        return (
            <Fragment>
                <div className='Storage_container'>
                    <SelectGroup/>
                </div>
                {/* <StorageChart/> */}
                <StorageTarget/>
            </Fragment>
        );
    }
}
