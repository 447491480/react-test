import React from 'react'
import {render} from 'react-dom'

import './static/css/common.less'

import AppRouteMap from './router/AppRouteMap'

render(
    <AppRouteMap/>,
    document.getElementById('root')
);