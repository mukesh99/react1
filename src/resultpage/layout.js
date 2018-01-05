import React from 'react';
import ReactDOM from 'react-dom';

import Headertop from './Headertop';
import Header from './header';
import Content from './content';

class Layout extends React.Component {
   render() {
      return (
         <div>
            <Headertop/> 
            <Header/>
            <Content/>
         </div>
      );
   }
}
export default Layout;