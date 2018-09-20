import {LocaleProvider} from 'antd';
import CN from 'antd/lib/locale-provider/zh_CN';
import React from 'react';
import Router from 'router'
import LeftMenu from 'container/home/left-menu';
import {Switch, Redirect} from 'react-router-dom';

const App = () => {
    return (
        <LocaleProvider locale={CN}>
            <div className='home_containers'>
                <LeftMenu/>
                <div className='home_right'>
                        <Router/>
                    {/* <Switch>
                    </Switch> */}
                </div>
            </div>
        </LocaleProvider>
    );
};

export default App;
