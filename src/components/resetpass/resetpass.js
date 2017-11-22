import React from 'react';
import './resetpass.less';
import classNames from 'classnames';
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

    /**
     * @description 表单输入
     * @param {*} e 
     */
    /*handleUserChange(e) {
        var temp_user;
        //console.log(e);
        this.setState({
            username: e.target.value
        })
    },*/

    /*handlePassChange(e) {
        this.setState({
            password: e.target.value
        })
    },*/


    /**
     * @desc 提交表单
     * @param {*} event 
     */
    submitHandler(event){
        event.preventDefault();
        /*var temp_user = this.state.username;
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
        if (e.target.value.length == 11 ) {

            temp_user = e.target.value;
            
        } else {
            alert("请输入正确的手机号");
        }*/
        
    },
    render() {
        return (
            <section className="reset">
                    <div className="title">
                        <Link to="/">
                            <i className="back">
                                <div className="icon-text"> </div>
                                </i>
                            </Link>
                        <span className="title-text">重置密码</span>
                        </div>
                    <form className="input">
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
                                        this.setState({
                                            password: e.target.value
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
                            <i className={
                                    classNames('viewPass'
                                    //,{ 'hide': this.state.alter_show }
                                )}
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
                            <button className="submit"  type="submit">提交</button>
                        </div>
                    </form>
                    
            </section>
        );
    },
})