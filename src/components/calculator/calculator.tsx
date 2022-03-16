import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Calculator() {
  return (
    <>
    <br/>
        <h2 style={{margin:"0"}}>Welcome to the calculator!</h2>
      <nav>
        <Link to="/">home</Link>
      </nav>

      <div className='ellipse'></div>
      <div className='ellipse2'></div>
      <div className='ellipse3'></div>
      <div className='box'></div>
      <div className='ellipse4shadow'></div>
      <div className='ellipse4'></div>

    </>
  );
}

export default Calculator;