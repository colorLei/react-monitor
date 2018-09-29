import React, { Component } from 'react';
import {connect} from 'react-redux'
import {HOME} from 'constant/action-types'
import BusinessBtn from 'component/common/business-btn'

@connect(state => ({leaderAndGroupList: state.HOME.leaderAndGroupList}))
export default class BusinessGroup extends Component{
  componentDidMount(){
    this.getLeaderAndGroup()
  }
  getLeaderAndGroup(){
    const {dispatch} = this.props
    dispatch({
      type: HOME.GET_LEADER_AND_GROUP.toString()
    })
  }
  render(){
    const { leaderAndGroupList } = this.props;
    return (
      <div className='business_group'>
      {
        leaderAndGroupList.map((leader,index) =>{
          return <BusinessBtn {...leader} index={index}/>
        })
      }
      </div>
    );
  }
}
