import React from 'react';
import {NavLink} from 'react-router-dom';
import OpdrException from 'component/home/opdr-exception'
import BusinessGroup from 'component/home/business-group'
import NowTime from 'component/home/now-time'

const site_btn = [
    {
        className: 'color-blue',
        text: '已选座位'
    }, {
        className: 'color-red',
        text: '异常座位'
    }, {
        className: 'color-gray',
        text: '可选座位'
    }
];
export default class LeftMenu extends React.Component {

    render() {
        return (
            <div className='home_left'>
                <div className='content_top'>
                    <NavLink to='/home' className='title'>Qunar运营中心监控大屏</NavLink>
                    <NowTime/>
                    <p>当前在班人力：666</p>
                </div>
                <OpdrException/>
                <div className='site_btn'>
                    {site_btn.map(({className, text}) => (
                        <div>
                            <button className={className}></button>
                            <span>{text}</span>
                        </div>
                    ))
}
                </div>
                <BusinessGroup/>
            </div>
        );
    }
}
