import React from 'react';
import './formuser.less';

export default React.createClass({
    getInitialState() {
        return({
            username: "",
        });
    },
    render() {
        return (
            <section className="formuser">
                <input className="user"
                    placeholder={this.props.phText} type="text" 
                    onChange={ (e)=>{
                            this.setState({
                                username: e.target.value})
                            } }
                    />
            </section>
        );
    },
})