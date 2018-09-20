import React, {Fragment} from 'react';
import {connect} from 'react-redux'
import {HOME} from 'constant/action-types'
import TimeInterval from 'component/common/time-interval'
import {Select} from 'common/my_antd'
import SelectGroup from 'component/detail/select-group'

const chart_len = 4;
const chart_arr = new Array(9).fill(1);
const Option = Select.Option;

@connect(state => ({collapsed: state.home.collapsed}))
export default class StorageTarget extends React.Component {

    render() {
        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return (
            <Fragment>

                <div className='storage_target'>
                    <div className='select'>
                        <label>库存指标型：</label>
                        <Select
                            defaultValue="lucy"
                            size='small'
                            style={{
                            width: 200
                        }}
                            onChange={handleChange}>
                            <Option value="jack">分销产品运营——出票</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>Disabled</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                    <TimeInterval/>
                </div>
            </Fragment>
        );
    }
}
