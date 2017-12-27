import React from 'react';
import './app.less';
import UserPage from '../userpage';

// const sss = React

export default  class App extends React.Component{
    /*getInitialState() {
        return ({
            loginType: "pass"
        })
    },*/
    
    render() {
        const userDefault = {
            iconsrc: "./avatar.png",
            nickname: "haha",
            user: "137xxxxxxxx",
            total: 0.00,
            hasReturned: 0.00,
            remaining: 0.00,
        }
        return (
            <section className="mall">
                <UserPage user={ userDefault}/>
            </section>
        );
    }
}
