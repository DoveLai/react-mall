import React from 'react';
import './app.less';
import Login from '../login';

// const sss = React

export default React.createClass({
    /*getInitialState() {
        return ({
            loginType: "pass"
        })
    },*/
    render() {
        
        return (
            <section className="mall">
                    <Login />
            </section>
        );
    },
});
