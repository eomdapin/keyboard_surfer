import React, { useEffect, useState } from 'react'
import MainProduct from './MainProduct.js';
import { API_URL } from '../config.js';

function Content() {
  const productClassName = ['popular', 'recommend', 'product', 'product', 'product', 'product', 'product', 'product'];
  const productName = ['인기상품', '추천상품', '풀배열 키보드', '텐키리스 키보드', '66Key 키보드', '마우스 패드', '악세서리', '더보기'];
  const productUrl = [1, 2, 1, 2, 3, 4, 5, 1];
  const [imgs, setImgs] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(response => setImgs(response.hits));
  }, []);

  return (
    <div id='content'>
      <div className='box'>
        {productClassName.map((className, index) => {
          return (
            <React.Fragment key={index}>
              {imgs &&
                <MainProduct
                  className={className}
                  href={`/keyboard_surfer/product/sub_${productUrl[index]}`}
                  src={imgs[index].largeImageURL}
                  alt={productName[index]} />
              }
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Content;
