import React, {Component} from 'react';
import {Select} from 'common/my_antd'
import {DETAIL} from 'constant/action-types'

const Option = Select.Option;
const level = ['一', '二', '三']
const levelNumber = ['One', 'Two', 'Three']
export default class BusinessBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
          typeOne: {},
          typeTwo: {},
          typeThree: {}
      }
    }
    componentWillMount(){
      const { activeOne, activeTwo, activeThree} = this.props;
      this.setState({
        typeOne:{...activeOne},
        typeTwo:{...activeTwo},
        typeThree:{...activeThree},
      })
    }
    handleChange = ({value,children}, i) =>{
      const stateData = {
        [`type${levelNumber[i]}`]:{
          name:children,
          code:value
        }
      },
      copyIndex = i;
      while ( ++i < level.length){
        stateData[`type${levelNumber[i]}`] = {}
      }
      this.setState(stateData, _ => {
        this._operate(copyIndex)
      });
    }
    _operate = i => {
      const { typeOne, typeTwo, typeThree} = this.state,
            {dispatch, setLevelList } = this.props,
            { length } = level;
      if(++i < length){
        setLevelList(i)
        i === 1 && dispatch({
          type:DETAIL.CLEAR_LEVELTHREE_LIST.toString()
        })
      }else{
        dispatch({
          type:DETAIL.SET_LEVELS_DATA.toString(),
          activeOne: typeOne,
          activeTwo: typeTwo,
          activeThree: typeThree
        })
      }
    }
    render() {
        return (
            <div className='select_type'>
                <label>数据类型：</label>
                <ul>
                    {level.map((v, i) => (
                        <li>
                            <label>数据{v}级类型</label>
                            <Select
                                value={this.state[`type${levelNumber[i]}`].code}
                                placeholder = '请选择'
                                size='small'
                                style={{width: 100}}
                                onChange={(value,{props}) => { this.handleChange(props,i) }}>
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
