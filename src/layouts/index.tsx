import React from 'react';
import NavPage from '../components/Nav';
export default props => {
  return (
    <>
      <NavPage />
      {props.children}
    </>
  );
};
