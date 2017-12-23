import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import FastClick from 'fastclick';
import { Router, Route, IndexRoute,HashRouter } from 'react-router';
import App from './components/app';
import Demo from './components/demo';
import Reset from './components/resetpass';
import Setup from './components/setup';
import UserPage from './components/userpage';
import Login from './components/login';
import Attend from './components/attend';
import QualApply from './components/qualapply';


window.React = React;

const redirectToChild = (location, replaceState) => {
  replaceState(null, '/about');
};

function bootstrap() {
    // Make taps on links and buttons work fast on mobiles 
    if (FastClick.attach) {
        FastClick.attach(document.body);
    } else {
        FastClick(document.body);
    }

    render(
        (
            <Router>
                <div>
                    <Route path="/" component={App} />
                    <Route path="/about" component={Demo} />
                    <Route path="/reset" component={Reset} />
                    <Route path="/setup" component={Setup} />
                    <Route path="/login" component={Login}/>
                    <Route path="/attend" component={Attend}/>
                    <Route path="/qualapply" component={QualApply}/>
                </div>
            
            </Router>
        
            //<App/>
            ), document.getElementById('react_container')
        );
}

// Run the application when both DOM is ready and page content is loaded
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
    bootstrap();
} else {
    document.addEventListener('DOMContentLoaded', bootstrap, false);
}
