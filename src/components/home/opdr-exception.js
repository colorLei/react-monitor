import React, {Component} from 'react';
import {connect} from 'react-redux'
import {HOME} from 'constant/action-types'

const TIME_INTERVAL = 2000;
@connect(state => ({exceptionList: state.LEFT_MENU.exceptionList}))
export default class OpdrException extends Component {
    constructor() {
        super();
    }
    componentWillMount() {
        this._TimeRefresh()
        this.getExceptionList();
    }
    getExceptionList = _ => {
        const {dispatch} = this.props
        dispatch({
            type: 'XHR_REQ',
            action: HOME.GET_EXCEPTION_LIST,
            data: {
                flag: 0
            },
            method: 'post'
        })
    }
    componentWillUnmount() {
        clearTimeout(this.timer)
        clearTimeout(this.timerOUT)
        clearTimeout(this.timerINTERVAL)
    }
    componentWillReceiveProps() {
        clearTimeout(this.timer)
    }
    _getScrollConf = el => {
        if (!el)
            return;
        const {height} = el.getBoundingClientRect();
        if (el.scrollHeight > height) {
            this.el = el;
            this.height = height;
            ({height: this.liHeight} = el.firstElementChild.getBoundingClientRect());
            el.scrollTop = 0;
            this._isScroll()
        }
    }
    _isScroll = _ => {
        const {el, liHeight, height} = this;
        this.timer = setTimeout(_ => {
            if (el.scrollTop + height < el.scrollHeight) {
                el.scrollTop += liHeight
            } else {
                el.scrollTop = 0;
            }
            this._isScroll()
        }, TIME_INTERVAL)
    }
    _TimeRefresh = _ => {
      const now = new Date(),
            nowTimestamp = now.getTime();
      const day = this._getNextHourTimestamp(now)
      const INTERVAL = day-nowTimestamp;
      if(INTERVAL>0){
        this.timerOUT = setTimeout( _ => {
          this._NowTimeRefresh();
          this.getExceptionList()
        },INTERVAL)
      }else{
        this._NowTimeRefresh()
      }
    }
    _NowTimeRefresh(){
      this.timerINTERVAL = setInterval( _ => {
        this.getExceptionList()
      },60*60*1000)
    }
    _getNextHourTimestamp(now){
      const nextHour = now.getHours()+1,
            day = new Date(now.setHours(nextHour)),
            minutes = day.getMinutes()*60*1000,
            seconds = day.getSeconds()*1000;
      return day-minutes-seconds
    }
    render() {
        const {exceptionList} = this.props;
        return (
            <div className='opdr_containar'>
                <a href='http://workbench.corp.qunar.com/#/opdr/exceptionList' target='_blank'>OPDR数据异常 [{exceptionList.length}]</a>
                <ul ref={el => this._getScrollConf(el)}>
                    {
                      exceptionList.map(({businessGroup, indexName, indexData}) => (
                        <li>{businessGroup.text}——{indexName}——{indexData.indexData}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
