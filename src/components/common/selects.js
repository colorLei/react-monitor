import React, {Component} from 'react';
import {Select} from 'common/my_antd'

const Option = Select.Option;
const level = ['一', '二', '三']
const levelNumber = ['One', 'Two', 'Three']
export default class BusinessBtn extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        function handleChange(value, option) {
            console.log(`selected ${value}`);
            console.log(option);
        }
        const {active} = this.props;
        return (
            <div className='select_type'>
                <label>数据类型：</label>
                <ul>
                    {level.map((v, i) => (
                        <li>
                            <label>数据{v}级类型</label>
                            <Select
                                defaultValue={active[`type${levelNumber[i]}`].code}
                                size='small'
                                style={{width: 100}}
                                onChange={handleChange}>
                                {this.props[`level${levelNumber[i]}`].map(({name, code}) => (
                                    <Option value={code}>{name}</Option>
                                ))
}
                            </Select>
                        </li>
                    ))
}
                </ul>
            </div>
        );
    }
}
