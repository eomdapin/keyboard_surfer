import React from 'react'
import Product from './Product.js';

function Content() {
  return (
    <div id='content'>
      <div className='popular'><a href="#"><img src="" /></a></div>
      <div className='recommend'><a href="#"><img src="" /></a></div>
      <Product  />
      <Product  />
      <Product  />
      <Product  />
      <Product  />
      <Product  />
    </div>
  );
}

export default Content;
