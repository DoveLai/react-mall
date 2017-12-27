import React from 'react';
import './center.css';
import {Link} from 'react-router';

export default class Center extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
        <section className="center">
                <div className="title">
                <Link to="/">
                <i className="i-back" 
                //onClick={history.go(-1)}
                ></i></Link>
                <span className="text">提现中心</span>
            </div>
            <div className="main">
                <div className="available">
                    <h2 className="text">可提鸿包（个）</h2>
                    <p className="data number">1000.00</p>
                </div>
                <div className="intro">
                    <div className="left">
                        <h2 className="text">
                            返现
                            <span className="data returned">0.00</span>
                            元
                        </h2>
                        <p className="intro text">（1返现=1元）</p>
                    </div>
                    <div className="right">
                        <h2 className="text">
                            鸿包
                            <span className="data returned">7</span>
                            个
                        </h2>
                        <p className="intro text">(1.25鸿包=1元)</p>
                    </div>
                </div>
            </div>
            <div className="process">
                <div className="application">
                    <i className="icon"></i>
                    <span className="text">提现申请</span>
                    <i className="next"></i>
                </div>
                <div className="processing">
                    <i className="icon"></i>
                    <span className="text">待处理</span>
                    <i className="next"></i>
                </div>
                <div className="processed">
                    <i className="icon"></i>
                    <span className="text">已处理</span>
                    <i className="next"></i>
                </div>
                <div className="record">
                    <i className="icon"></i>
                    <span className="text">提现记录</span>
                    <i className="next"></i>
                </div>
            </div>
        </section>
        )
    }
}
