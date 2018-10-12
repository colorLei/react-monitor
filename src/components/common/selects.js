import React, {Component, Fragment} from 'react';
import {Select} from 'common/my_antd'
import {DETAIL} from 'constant/action-types'
import {Redirect} from "react-router-dom";
import { DetailRoutes } from 'common/config'

const Option = Select.Option;
const level = ['一', '二', '三']
const levelNumber = ['One', 'Two', 'Three']
const levelPathNumber = ['ONE', 'TWO', 'THREE'];
export default class BusinessBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
          typeOne: {},
          typeTwo: {},
          typeThree: {},
          redirectConfirm:false,
          redirectUrl:''
      }
    }
    componentDidMount(){
      this._updateState()
      this.init()
    }
    componentWillReceiveProps(nextProps){
      for(let i=0;i<level.length;i++){
        const active = `active${levelNumber[i]}`;
        if(nextProps[active].code !== this.props[active].code){
          this._updateState()
          break;
        }
      }
    }
    init(){
      levelNumber.forEach((v,i) => {
        this.setLevelList(i,this.props[`active${levelNumber[i]}`].code)
      })
    }
    setLevelList = (i,showType) =>{
      const { dispatch } = this.props
      dispatch({
        type: DETAIL[`GET_LEVEL${levelPathNumber[i]}_LIST`].toString(),
        data: {
          mark: i+1,
          showType
        },
        method: 'post'
      })
    }
    _updateState(){
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
      this.setState(stateData,()=>{
        this._operate(copyIndex)
      })
      this.setState(stateData, _ => {
        this._operate(copyIndex)
      });
    }
    _operate = i => {
      const { typeOne, typeTwo, typeThree} = this.state,
            { dispatch,hostryMark } = this.props,
            { length } = level;
      if(++i < length){
        // this.setLevelList(i,this.state[`type${levelNumber[i]}`].code)
        i === 1 && dispatch({
          type:DETAIL.CLEAR_LEVELTHREE_LIST.toString()
        })
      }else{
        console.log(1)
        const [ { path } ] = DetailRoutes.filter( ({code}) => code === hostryMark);
        const redirectUrl = `${path}${typeOne.code}/${typeTwo.code}/${typeThree.code}`;
        this.setState({
          redirectConfirm:true,
          redirectUrl
        })
      }
    }
    render() {
        const { redirectUrl,redirectConfirm } = this.state;
        return (
          <Fragment>
            { redirectConfirm  && <Redirect to={ redirectUrl }/>}
            <div className='select_type'>
                <label>数据类型：</label>
                <ul>
                    {level.map((v, i) => (
                        <li>
                            <label>数据{v}级类型</label>
                            <Select
                                value={this.state[`type${levelNumber[i]}`].name}
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
          </Fragment>
        );
    }
}
