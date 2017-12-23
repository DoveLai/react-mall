import React from 'react';
import './attend.less';
import {Button, Toast} from 'react-weui';

import 'weui';
import 'react-weui/build/packages/react-weui.css';
import { setTimeout } from 'timers';

export default class Attend extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
            showLoading: false,
            toastTimer: null,
            loadingTimer: null,
        }
    }
    
    
    componentWillUnmount() {
        this.state.toastTimer && clearTimeout(this.state.toastTimer);
    }
    showToast() {
        this.setState({showToast:true});
        
        this.toastTimer = setTimeout(()=> {
            this.setState({showToast:false});
        }, 2000);
        
    }
    render() {
        return(
            <section className="apply">
                <div className="img-box">
                    <div className="img"></div>
                </div>
                <div className="btns">
                    
                    <Button 
                    onClick={this.showToast.bind(this)}
                    >立即申请</Button>
                    <Toast icon="success-no-circle" 
                    show={this.state.showToast}
                    >Done</Toast>
                    
                </div>
            </section>
            
        )

    }
    
}