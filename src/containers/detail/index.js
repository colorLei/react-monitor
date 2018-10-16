import React, {Fragment} from 'react';
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import SelectGroup from 'component/detail/select-group'
import Selects from 'component/common/selects'
import {DETAIL} from 'constant/action-types'
@connect(state => state.DETAIL)
export default class DETAILPAGE extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {Routes, activeOne, activeTwo, activeThree,hostryMark, detailRoutesConf} = this.props;
        return (
            <Fragment>
                {hostryMark === false && <Redirect to='/home'/>}
                <div className='detail_top'>
                    <div className='title'>
                        <label>数据详情：</label>
                        <span>{activeOne.name}-{activeTwo.name}-{activeThree.name}</span>
                    </div>
                    <SelectGroup routes = {detailRoutesConf}/>
                </div>
                <div style={{
                    minHeight: '400px'
                }}>
                    {< Routes />
}
                </div>
                { activeOne.code && <Selects {...this.props}/>
}
            </Fragment>
        );
    }
}
