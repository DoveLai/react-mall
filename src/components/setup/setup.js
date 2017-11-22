import React from 'react';
import './setup.less';
import {Link} from 'react-router';

export default React.createClass({
    getInitialState() {
        return ({
            username: "",
            password: "********",
            //loginText: "验证码登录",
            //alter_show: false,
            passType: "password"

        })
    },
    submitHandler(e) {
        e.preventDefault();
    },
    render() {
        return(
            <section className="setup">
                <div className="title">
                    <Link to="/">
                            <i className="back">
                                <div className="icon-text"> </div>
                                </i>
                        </Link>
                </div>
                <div className="icon" >
                        
                        <i className="icon-src">
                            <div className="icon-text">  </div>
                        </i>

                    </div>
                <form className="input"onSubmit={this.submitHandler}>
                    <div className="login-input">
                        <input className="user"placeholder="请输入手机号" type="text" 
                        onChange={ (e)=>{
                            this.setState({
                                username: e.target.value
                            })
                            } }/>
                            
                    </div>
                    <div className="vcode-input">
                        <input className="pass"placeholder="请输入验证码" 
                            type="text"
                            onChange={ 
                                (e)=>{
                                    this.setState({                                            password: e.target.value
                                        })

                                    } 
                                }
                            />
                        <button className="getvCode"
                                    >
                                    获取验证码
                        </button>
                        </div>
                    <div className="pass-input">
                        <input className="pass"placeholder="请输入密码" 
                            type={this.state.passType}
                            onChange={ 
                                (e)=>{
                                    this.setState({
                                            password: e.target.value
                                    })

                                } 
                            }
                            />
                        <i className="viewPass"
                                //,{ 'hide': this.state.alter_show }
                            
                                onClick= { //显示密码详情
                                    (e)=> {
                                        this.setState({
                                            passType: "text" 
                                        })
                                    }
                                }
                            >
                            <div className="icon-text">
                                </div>
                            </i>
                            
                        </div>
                    <div className="btn">
                        <button className="submit"  type="submit">注册</button>
                    </div>
                </form>
                <div className="other">
                    <Link to="/">
                        <span className="loginnow">已有账号！立即登录</span>
                        </Link></div>
            </section>

        )
    }
})