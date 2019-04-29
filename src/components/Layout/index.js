import React from 'react';
import Header from '../Header';

const Layout = (props) => {
  return (
    <div>
      <Header quantity={props.quantity}/>
      {props.children}
    </div>
  )
}

export default Layout;
