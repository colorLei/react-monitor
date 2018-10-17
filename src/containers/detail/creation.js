import React, {Fragment} from 'react';
import {connect} from 'react-redux'
import HourChart from 'component/detail/hour-chart'
import TimeInterval from 'component/common/time-interval'
import { detailMixins } from 'common/mixins'

const HOUR = '2';
@connect(state => state.DETAIL)
@detailMixins(HOUR)
export default class CREATION extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {hoursList} = this.props
        return (
            <Fragment>
              <div style={{minHeight:'500px'}}>
                {hoursList.length>0 && <HourChart hoursList={hoursList}/>}
              </div>
                <TimeInterval hoursList={hoursList}/>
            </Fragment>
        );
    }
}
