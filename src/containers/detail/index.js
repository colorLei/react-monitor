import React, {Fragment} from 'react';
import {connect} from 'react-redux'
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
@connect(state => state.DETAIL)
export default class LeftMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentWillMount() {
      this._init();
    }
    _init = _ => {
      const {dispatch} = this.props
      dispatch({
        type: DETAIL.GET_LEVELONE_LIST.toString()
      })
      dispatch({
        type: DETAIL.GET_LEVELTWO_LIST.toString()
       })
      dispatch({
        type: DETAIL.GET_LEVELTHREE_LIST.toString()
      })
    }
    render() {
        const {
            Routes,
            active: {
                typeOne,
                typeTwo,
                typeThree
            }
        } = this.props;
        console.log(this.props)
        return (
            <Fragment>
                <div className='detail_top'>
                    <div className='title'>
                        <label>数据详情：</label>
                        <span>{typeOne.name}-{typeTwo.name}-{typeThree.name}</span>
                    </div>
                    <SelectGroup routes={routes}/>
                </div>
                <Routes/>
                <Selects {...this.props}/>
            </Fragment>
        );
    }
}
