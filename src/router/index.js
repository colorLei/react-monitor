import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import asyncComponent from './asyncComponent'
import detailComp from 'container/detail'
import storageComp from 'container/storage'

const _import_components = file => asyncComponent(() => import (`container/${file}`))

const root = [
    {
        path: '/home',
        name: 'home',
        component: _import_components('home/chart-monitor'),
        meta: {}
    }, {
        path: '/detail',
        name: 'detail',
        component: detailComp,
        meta: {},
        children: [
            {
                path: '/creation/:levelOne/:levelTwo/:levelThree',
                name: 'creation',
                component: _import_components('detail/creation'),
                meta: {}
            },
            {
                path: '/tendency/:levelOne/:levelTwo/:levelThree',
                redirectFrom: '/detail',
                name: 'tendency',
                component: _import_components('detail/tendency'),
                meta: {}
            }
        ]
    }, {
        path: '/storage',
        name: 'storage',
        meta: {},
        component: storageComp,
        children: [
            {
                path: '/chart',
                component: _import_components('storage/chart'),
                meta: {}
            }, {
                path: '/target',
                name: 'target',
                component: _import_components('storage/target'),
                meta: {}
            }
        ]
    }
]
const mapViewToRoutesAndLinks = (routers, ParentPath = '') => ( _ => (
    <Switch>
        {routers.map(({path, component, children, name}) => {
            const Comp = component;
            return (
                <Route
                    key={name}
                    path={ParentPath + path}
                    render={ps => <Comp {...ps} Routes={children && mapViewToRoutesAndLinks(children, path)}/>}/>
            )
        })}
        {!!routers.length && <Redirect to='/home'/>}
    </Switch>
))

export default mapViewToRoutesAndLinks(root)
