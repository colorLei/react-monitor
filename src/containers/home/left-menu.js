import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux'
import { HOME } from 'constant/action-types'
import OpdrException from 'component/home/opdr-exception'
import BusinessGroup from 'component/home/business-group'
import NowTime from 'component/home/now-time'

const site_btn =[
  {
    className:'color-blue',
    text:'在选座位'
  },
  {
    className:'color-red',
    text:'异常座位'
  },
  {
    className:'color-gray',
    text:'可选座位'
  },
]
@connect(
  state => ({
    collapsed: state.home.collapsed
  }),
  // dispatch => ({dispatch})
)
export default class LeftMenu extends React.Component {
  toggleCollapsed = id => {
        console.log(this.props.history);
        const { dispatch } = this.props
        dispatch({
          type: 'SET_AJAX_REQUSET',
          action: HOME.CHNAGE_QUMENU_COLLAPSED
        })
    }
  componentDidMount(){
  }
  render() {
    const { dispatch ,collapsed} = this.props
    return (
        <div className='home_left'>
          <div className='content_top'>
            <NavLink to='/home' className='title'>武汉运营中心数据监控大屏</NavLink>
            <NowTime/>
            <p>当前在班人力：666</p>
          </div>
          <OpdrException/>
          <div className='site_btn'>
          {
            site_btn.map(({className,text}) => (
              <div>
                <button className={ className }></button>
                <span>{ text }</span>
              </div>
            )
          )
          }
          </div>
          <BusinessGroup/>
        </div>
    );
  }
}
