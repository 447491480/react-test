/*
   App 容器组件的子组件，顶部状态栏
*/
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class AppCom extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // 测试装饰器
        function decorator(target) {
            target.prototype.getName = function () {
                alert('decorator', this.name);
            }
        }

        @decorator
        class Decor {
            constructor(name) {
                this.name = name;
            }
        }

        const decor = new Decor('test decor');
        decor.getName();

        // 测试 Promise fetch
        if (Promise) {
            alert('have Promise');
        } else {
            alert('no Promise');
        }

        if (fetch) {
            alert('have fetch');
        } else {
            alert('no fetch');
        }

        // 测试 异步函数
        async function test() {
            await new Promise(function (resolve) {
                resolve('test')
            })
        }

        test().then(res => {
            alert('have async');
        })
    }
    render() {

        return (
            <div id="app-container">
                <header className="app-header">成员列表</header>
                <div className="app-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default withRouter(AppCom)