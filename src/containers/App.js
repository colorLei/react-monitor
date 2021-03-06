// import {LocaleProvider} from 'antd'; import CN from
// 'antd/lib/locale-provider/zh_CN';
import React from 'react';
import Router from 'router'
import LeftMenu from 'container/home/left-menu';

const App = () => {
    return (
        <div className='home_containers'>
            <LeftMenu/>
            <div className='home_right'>
                <Router/>
            </div>
        </div>
    );
};

export default App;
