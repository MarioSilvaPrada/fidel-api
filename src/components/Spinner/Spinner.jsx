import React from 'react';
import './Spinner.css';

const Spinner = () => (
  <div className="container">
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Spinner;
