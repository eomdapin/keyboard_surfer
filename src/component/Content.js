import React from 'react'
import Product from './Product.js';

function Content() {
  return (
    <div id='content'>
      <div className='top_box'>
        <div className='popular'><a href="#"><img src="" alt="" /></a></div>
        <div className='recommend'><a href="#"><img src="" alt="" /></a></div>
      </div>
      <div className='bottom_box'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Content;
