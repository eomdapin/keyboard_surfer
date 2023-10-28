import React from 'react'
import Product from './Product.js';

function Content() {
  const productClassName = ['popular', 'recommend', 'product', 'product', 'product', 'product', 'product', 'product'];
  const productName = [];

  return (
    <div id='content'>
      <div className='box'>
        {
          productClassName.map((className, index) => {
            console.log(className)
            return (
              <Product className={className} href={`/product/sub0${index+1}`} src={`./img/${index + 1}.jpg`} />
            );
          })
        }
      </div>
    </div>
  );
}

export default Content;
