import BaseComponent from '../../common/BaseComponent'
import React from 'react'

class Detail extends BaseComponent {
    constructor(props,context) {
        super(props,context);
    }

    render() {
        return (
            <p>
                Detail,url参数{this.props.params.id}
            </p>
        )
    }

}

export default Detail