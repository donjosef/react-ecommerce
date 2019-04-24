import React from 'react';
import Header from '../Header';
import Form from '../Form';

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Form />
    </div>
  )
}

export default Layout;
