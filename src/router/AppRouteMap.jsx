import BaseComponent from '../common/BaseComponent'
import React from 'react'
import {
    HashRouter as Router,
    Route,
} from 'react-router-dom'

import createHistory from 'history/createHashHistory'

import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound'

export default class AppRouteMap extends BaseComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Router history={createHistory()}>
                <Route render={
                    ({location}) => {
                        return (
                            <div key={location.pathname}>
                                <Route exact path="/" component={Home}/>
                                <Route path='/list' component={List}/>
                                <Route path='/detail/:id' component={Detail}/>
                                <Route path='*' component={NotFound}/>
                            </div>
                        )
                    }
                }/>
            </Router>
        )
    }

}