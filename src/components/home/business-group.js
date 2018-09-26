import React, { Component } from 'react';
import {connect} from 'react-redux'
import {HOME} from 'constant/action-types'
import xhr from 'common/api.js';
import BusinessBtn from 'component/common/business-btn'

const groupLen = 5;
@connect(state => ({leaderAndGroupList: state.LEFT_MENU.leaderAndGroupList}))
export default class BusinessGroup extends Component{
  componentDidMount(){
    this.getLeaderAndGroup()
  }
  getLeaderAndGroup(){
    xhr({
      url:HOME.GET_LEADER_AND_GROUP.API
    }).then( ({data}) => {
      this._formatLeaderAndGroup(data)
    })//TODO 错误提示
  }
  _formatLeaderAndGroup(Business){
    const {dispatch} = this.props
    Business.forEach( v => {
      const { BusinessGroups } = v;
      const len = groupLen - BusinessGroups.length;
      if(len>0){
        v.BusinessGroups = BusinessGroups.concat(new Array(len).fill({group:false}))
      }
    })
    dispatch({
      type: HOME.GET_LEADER_AND_GROUP.OK,
      payload:Business
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
