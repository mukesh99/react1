import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
   render() {
      return (
         <div className="header-area">
            <div className="site-branding-area">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="logo">
                      <div className="logo"></div>
                    </div>
                </div>
                
                <div className="col-sm-6">
                    <div className="shopping-item">
                        <a href="cart.html">Cart - <span className="cart-amunt">$100</span> <i className="fa fa-shopping-cart"></i> <span className="product-count">5</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
         </div>
      );
   }
}
export default Header;