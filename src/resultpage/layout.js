import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Content from './content';

class Layout extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}
export default Layout;