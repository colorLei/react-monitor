import React, {Fragment} from 'react';
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import {DETAIL} from 'constant/action-types'
import SelectGroup from 'component/detail/select-group'
import Selects from 'component/common/selects'


const routes = [
    {
        name: '历史趋势',
        path: '/detail/tendency'
    }, {
        name: '小时创建',
        path: '/detail/creation'
    }
]
const levelNumber = ['ONE', 'TWO', 'THREE'];
const activeNumber = ['One', 'Two', 'Three']
@connect(state => state.DETAIL)
export default class DETAILPAGE extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          redirectToReferrer:false
        }
    }
    componentWillMount() {
      this._init();
    }
    _init = _ => {
      const { dispatch, location:{ state }} = this.props;
      console.log(state)
      if(typeof state === 'undefined'){
        this.setState({ redirectToReferrer: true })
        return;
      }
      const {activeOne,activeTwo,activeThree} = state;
      dispatch({
        type:DETAIL.SET_LEVELS_DATA.toString(),
        activeOne,
        activeTwo,
        activeThree
      })
      levelNumber.forEach((v,i) => {
        this.setLevelList(i,state[`active${activeNumber[i]}`].code)
      })
    }
    setLevelList = (i,showType) =>{
      const {dispatch} = this.props
      dispatch({
        type: DETAIL[`GET_LEVEL${levelNumber[i]}_LIST`].toString(),
        data: {
          mark: i+1,
          showType
        },
        method: 'post'
      })
      if(i===levelNumber.length-1){
        // dispatch({
        //   type: DETAIL.GET_HOURS_LIST.toString(),
        //   data: {
        //     primaryType: 1,
        //     secondaryType: 1,
        //     tertiaryType: 1,
        //     hostryMark
        //   },
        //   method: 'post'
        // })
      }
    }
    render() {
        const {
            Routes,
            activeOne,
            activeTwo,
            activeThree,
        } = this.props;
        const { redirectToReferrer } = this.state;
        return (
            <Fragment>
                {redirectToReferrer && <Redirect to='/home' />}
                <div className='detail_top'>
                    <div className='title'>
                        <label>数据详情：</label>
                        <span>{activeOne.name}-{activeTwo.name}-{activeThree.name}</span>
                    </div>
                    <SelectGroup routes={routes}/>
                </div>
                <div style={{minHeight:'400px'}}>
                {
                  <Routes/>
                }
                </div>
                {
                  activeOne.code && <Selects {...this.props} setLevelList={ this.setLevelList }/>
                }
            </Fragment>
        );
    }
}
