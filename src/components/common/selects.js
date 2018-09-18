import React, { Component, Fragment } from 'react';
import { Select } from 'common/my_antd'


export default class BusinessBtn extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    const Option = Select.Option;

    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    return (
      <div className='select_type'>
        <label>数据类型：</label>
        <ul>
          <li>
            <label>数据一级类型</label>
            <Select defaultValue="lucy" size='small' style={{ width: 100 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </li>
          <li>
            <label>数据一级类型</label>
            <Select defaultValue="lucy" size='small' style={{ width: 100 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </li>
          <li>
            <label>数据一级类型</label>
            <Select defaultValue="lucy" size='small' style={{ width: 100 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </li>
        </ul>
      </div>
    );
  }
}
