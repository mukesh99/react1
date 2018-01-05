import React from 'react';
import ReactDOM from 'react-dom';
//import click from '../resultpage/api.js';
import App from '../resultpage/result';
import Home from '../resultpage/home';
import About from '../resultpage/about';
import Contact from '../resultpage/contact';
import Layout from '../resultpage/Layout';
import DemoCarousel from '../resultpage/slider';

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

// load the stylesheet
require('../styles/main.scss');

ReactDOM.render(<Layout/>, document.getElementById('react-anchor'));
ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
		 <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
		
         
      </Route>
   </Router>
	
), document.getElementById('app'))

ReactDOM.render(<DemoCarousel />, document.querySelector('.slider'));

ReactDOM.render(<Footer/>, document.getElementById('footer'));