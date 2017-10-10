import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class App extends React.Component {
   render() {
      return (
	  
         <div className="nav-menu">
            <ul>
               <li><Link to = "/home">Home</Link></li>
               <li><Link to = "/about">About</Link></li>
               <li><Link to = "/contact">Contact</Link></li>
			    <li><Link to = "/contact" url="/contact"><button type="button" >Login</button></Link> </li>
            </ul>
				
           {this.props.children}
		   <div className="outermain">
			<div className="username_text">User Name</div>
			<div className="username_input"><input type="text" className="form-control" /></div>
			
			<div className="username_text">password</div>
			<div className="username_input"><input type="password" className="form-control" /></div>
			<div className="username_text">&nbsp;</div>
			<div className="username_input"><input type="button" name="submit" value="Submit" /></div>
		  </div>
         </div>
		 
      )
   }
}

export default App;






