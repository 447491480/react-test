import BaseComponent from '../../common/BaseComponent'
import React from 'react'

import {HashRouter} from 'react-router-dom'

class List extends BaseComponent {
    constructor(props,context) {
        super(props,context);
    }

    render() {
        const arr = [1,2,3,4];

        return (
            <ul>
                {
                    arr.map((item,i)=>{
                        return <li key={i} onClick={this.clickHandler.bind(this,item)}>js jump to {item}</li>
                    })
                }
            </ul>
        )
    }

    clickHandler(value) {
        this.context.history.push('/detail/'+value)
    }
}

export default List

