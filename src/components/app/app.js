import React from 'react';
import './app.less';
import UserPage from '../userpage';

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
                    <UserPage />
            </section>
        );
    },
});
