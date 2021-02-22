import React from 'react';
import Navbar from '../Common/Navbar';

function Layout(props) {
  return (
    <>
      <Navbar toggleDarkMode={props.toggleDarkMode} />
      <main>
        <div className='container'>{props.children}</div>
      </main>
    </>
  );
}

export default Layout;
