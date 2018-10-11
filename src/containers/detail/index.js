import React, {Fragment} from 'react';
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import {DETAIL} from 'constant/action-types'
import SelectGroup from 'component/detail/select-group'
import Selects from 'component/common/selects'


const routes = [
    {
        name: '历史趋势',
        path: '/detail/tendency',
        code:'1'
    }, {
        name: '小时创建',
        path: '/detail/creation',
        code:'2'
    }
]
const levelNumber = ['ONE', 'TWO', 'THREE'];
const activeNumber = ['One', 'Two', 'Three']

const ASK = routes.reduce((init,{path,code}) => {
  init[`#${path}`] = code ;
  return init ;
},{})

@connect(state => state.DETAIL)
export default class DETAILPAGE extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          redirectToReferrer:false
        }
    }
    componentDidMount() {
      this._init();
    }
    _init = _ => {
      const { dispatch, location:{ state }} = this.props;
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
      const { dispatch,location:{ state: {activeOne,activeTwo,activeThree}}} = this.props
      dispatch({
        type: DETAIL[`GET_LEVEL${levelNumber[i]}_LIST`].toString(),
        data: {
          mark: i+1,
          showType
        },
        method: 'post'
      })
      if(i === levelNumber.length-1) {
        // this.getDetailData(activeOne.code,activeTwo.code,activeThree.code)
      }
    }
    getDetailData = (codeOne,codeTwo,codeThree) => {
      const { dispatch } = this.props;
      dispatch({
        type: DETAIL.GET_HOURS_LIST.toString(),
        data: {
          primaryType: codeOne,
          secondaryType: codeTwo,
          tertiaryType: codeThree,
          hostryMark:ASK[location.hash]
        },
        method: 'post'
      })
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
                  activeOne.code && <Selects {...this.props}
                  setLevelList={ this.setLevelList }
                  getDetailData={this.getDetailData}/>
                }
            </Fragment>
        );
    }
}
