import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ChartMonitor from 'container/home/chart-monitor'
import DataDetail from 'container/detail'
import Storage from 'container/storage'

const routers = () => {
    return (
        <Switch>
            <Route exact path="/" component={ChartMonitor}/>
            <Route path="/detail" component={DataDetail}/>
            <Route path="/storage" component={Storage}/>
            <Redirect to="/"/>
        </Switch>
    );
};

export default routers;
