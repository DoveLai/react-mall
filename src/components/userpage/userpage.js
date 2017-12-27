import React from 'react';
import './userpage.less';
import {Link} from 'react-router';

export default class  UserPage extends React.Component{
    constructor(props) {
        super(props);
        
    }
    
    render() {
        var tip = "";
        tip = (this.props.user.nickname == "") ? "快速登录": "";
            
        return(
            <section className="page">
                <div className="title">
                    <i className="icon" 
                        css={"background-image:url({this.props.user.iconsrc})"}
                        ></i>
                    <div className="profile">
                        <div className="detail">
                            <div className="nickname">
                                <span className="text" 
                                //onClick={}
                                    >{this.props.user.nickname}
                                    </span>
                                <Link to="/login">
                                
                                {tip}
                                <i className="logout" 
                                //onClick= {}
                                > <span></span>
                                    </i>
                                </Link>
                            </div>
                            <div className="user">{this.props.user.user}</div>
                        </div>
                    </div>

                </div>
                
                <div className="totalProperty">
                    <div className="tp-image-box">
                        <div className="tp-image"></div>
                    </div>

                    <div className="detail">
                        <p className="text">总资产</p>
                        <p className="text">00.00</p>
                    </div>
                    
                </div>
                <div className="more">
                        <div className="returned">
                            <i className="icon"></i>
                            <span className="text">已返现资产</span>
                            <span className="number">0.00</span>
                        </div>
                        <div className="remaining">
                            <i className="icon"></i>
                            <span className="text">剩余返现资产</span>
                            <span className="number">0.00</span>
                        </div>
                    </div>
                <div className="clear"></div>
                
                <div className="footer">
                    <a className="foot-nav" href="/">
                        <i className="i-home"></i>
                        <span>首页</span>

                        </a>
                    
                    <a className="foot-nav" href="#/attend">
                        <i className="i-attend"></i>
                        <span>参与返现</span>
                    </a>
                   
                    <a className="foot-nav" href="#/center">
                        <i className="i-center"></i>
                        <span>返现中心</span>
                    </a>
                    <a className="foot-nav" href="#/record">
                        <i className="i-record"></i>
                        <span>返现记录</span>
                    </a>
                </div>
                
            </section>
        );
    }
}