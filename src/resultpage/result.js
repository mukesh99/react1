import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class App extends React.Component {
   render() {
      return (
   <div id="undefined-sticky-wrapper" className="sticky-wrapper">
    <div className="mainmenu-area">
        <div className="container">
            <div className="row">
                
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="active">
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/contact" url="/contact"><button type="button">Login</button></Link>
                    </li>
                    </ul>

                </div> 
                {this.props.children}
            </div>
        </div>
    </div>
</div>
      )
   }
}

export default App;






