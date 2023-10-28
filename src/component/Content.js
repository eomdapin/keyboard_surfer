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
            return (
              <React.Fragment key={index}>
                <Product className={className} href={`/product/sub0${index + 1}`} src={`./img/${index + 1}.jpg`} alt={`/product/sub0${index + 1}`} />
              </React.Fragment>
            );
          })
        }
      </div>
    </div>
  );
}

export default Content;
