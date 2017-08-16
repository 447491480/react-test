import BaseComponent from '../common/BaseComponent'
import React from 'react'
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom'

import App from '../containers/App'
import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound'


class AppRouteMap extends BaseComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Switch>
                <Route path="/" render={(props) => (
                    <App>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/list" component={List}/>
                            <Route path='/detail/:id' component={Detail}/>
                            <Route path='*' component={NotFound}/>
                            <Redirect from="/undefined" to={{pathname: '/', search: '?mold=redirect'}}/>
                        </Switch>
                    </App>
                )}/>
                <Route render={() => (<Redirect to="/"/>)}/>
            </Switch>
        )
    }

}

export default AppRouteMap;
