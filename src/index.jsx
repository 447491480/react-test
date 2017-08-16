import './static/css/common.less'

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createHistory from 'history/createHashHistory';

// 引入原始的配置模块
import store from './store/index';
import Root from './router/AppRouteMap';

const history = createHistory();
const mountNode = document.getElementById('root');

// react 的插件，提供onTouchTap()
injectTapEventPlugin();

// 封装 render
const render = (Component) => {
    ReactDOM.render((
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history} basename="">
                    <Component/>
                </ConnectedRouter>
            </Provider>
        </AppContainer>
    ), mountNode);
};

render(Root);
console.log(process.env.NODE_ENV);

if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept('./router/AppRouteMap', (err) => {
        console.log('module hot');
        if (err) {
            console.log(err);
        }
        const NextComponent = require('./router/AppRouteMap');

        render(NextComponent);
    });
}