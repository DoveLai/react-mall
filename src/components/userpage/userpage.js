import React from 'react';
import './userpage.less';

export default React.createClass({
    getInitialState() {
        return({
            iconsrc: "./avatar.png",
            nickname: "飞鸟",
            user: "13700859402",
            total: 0.00,
            hasReturned: 0.00,
            remaining: 0.00,
        })
    },
    render() {
        return(
            <section className="page">
                <div className="title">
                    <i className="icon"></i>
                    <div className="profile">
                        <div className="detail">
                            <div className="nickname">
                                <span className="text" onClick={}
                                    >{this.state.nickname}
                                    </span>
                                <i className="logout" onClick= {}></i>
                            </div>
                            <div className="user">{this.state.user}</div>
                        </div>
                    </div>

                </div>
                <div className="totalProperty">

                </div>
                <div className="btn"></div>
                <div className="faq"></div>
            </section>
        );
    }
})