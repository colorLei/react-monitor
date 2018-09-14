import React from 'react';
import { connect } from 'react-redux'
// import { Menu, Icon, Button } from 'common/my_antd';
import { HOME } from 'constant/action-types'
import OpdrException from 'component/home/opdr-exception'
import BusinessGroup from 'component/home/business-group'

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

const SiteBtn = (props) => {
  const { bgClass,text } = props;
  return (
    <div>
      <button className={ bgClass }></button>
      <span>{ text }</span>
    </div>
  );
}
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
      <div className='home_containers'>
        <div className='home_left'>
          <div className='content_top'>
            <p className='title'>武汉运营中心数据监控大屏</p>
            <p className='now_time'>2018年08月08日 18:00:00</p>
            <p>当前在班人力：400</p>
          </div>
          <OpdrException/>
          <div className='site_btn'>
          {
            site_btn.map(({className,text}) => <SiteBtn bgClass={className} text={text} key={text}/>)
          }
          </div>
          <BusinessGroup/>
        </div>
        <div className='home_right'>2222222</div>
      </div>
    );
  }
}
