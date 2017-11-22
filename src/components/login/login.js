import React from 'react';
import './login.less';
import classNames from 'classnames';
import {Link} from 'react-router';

// const sss = React

export default React.createClass({
    getInitialState() {
        return ({
            username: "",
            password: "********",
            loginText: "验证码登录",
            alter_show: false,
            passType: "password"

        })
    },

    /**
     * @description 表单输入
     * @param {*} e 
     */
    handleUserChange(e) {
        var temp_user;
        //console.log(e);
        this.setState({
            username: e.target.value
        })
    },

    /*handlePassChange(e) {
        this.setState({
            password: e.target.value
        })
    },*/

    handleAlterLogin() {
        var tempText = this.state.loginText;
        switch (tempText) {
            case "验证码登录":
            this.setState({
                loginText: "密码登录",
                alter_show: true
            });
            break;
            default: 
            this.setState({
                loginText: "验证码登录",
                alter_show: false
            });
        }
        
    },

    /**
     * @desc 提交表单
     * @param {*} event 
     */
    submitHandler(event){
        event.preventDefault();
        var temp_user = this.state.username;
        if (temp_user.length ==11 ) {
            for(var i=0;i<temp_user.length;i++) {
                if(isNaN(temp_user.charAt(i)-0 )) {
                    alert("请输入正确的手机号");
                    break;
                }
            }
        } else {
            alert("请输入正确的手机号");
        }
        /*if (e.target.value.length == 11 ) {

            temp_user = e.target.value;
            
        } else {
            alert("请输入正确的手机号");
        }*/
        
    },
    render() {
        
        return (
            <section className="login">
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
                    <form  className="login-form"onSubmit={this.submitHandler}>
                        <div className="login-input">
                            <input className="user"placeholder="请输入手机号" type="text" 
                            onChange={ this.handleUserChange }/>
                            
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
                                <i className={
                                    classNames('viewPass',{ 'hide': this.state.alter_show })}
                                    onClick= { //显示密码详情
                                        (e)=> {
                                            this.setState({
                                                passType: "text" 
                                            })
                                        }
                                    }
                                    >
                                    <div className="icon-text"></div>
                                    </i>
                                <button className={
                                    classNames('getvCode',{ 'show': this.state.alter_show })}
                                    >
                                    获取验证码
                                </button>
                            </div>
                        <div className="btn">
                            <button className="login"  type="submit">登录</button>
                            
                        </div>
                    </form>
                    <div className="btn">
                        <button className="alter_login" 
                            onClick={this.handleAlterLogin}
                            >{ this.state.loginText }</button>
                        </div>
                    <div className="other">
                        <Link to="/setup">
                            <span className="signup">还没有账号？快速注册</span>
                            </Link>
                        <Link to="/reset">
                            <span className="forgetPass">忘记密码!</span>
                            </Link>
                    </div>
            </section>
        );
    },
});
