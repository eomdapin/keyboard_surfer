import React from 'react'
import MainProduct from './MainProduct.js';

function Content() {
  const productClassName = ['popular', 'recommend', 'product', 'product', 'product', 'product', 'product', 'product'];
  const productName = ['인기상품', '추천상품','풀배열 키보드', '텐키리스 키보드', '66Key 키보드', '마우스 패드', '악세서리', '레오폴드'];

  return (
    <div id='content'>
      <div className='box'>
        {
          productClassName.map((className, index) => {
            return (
              <React.Fragment key={index}>
                <MainProduct className={className} href={`/product/sub_${index + 1}`} src={`./img/${index + 1}.jpg`} alt={`${productName[index]}`} />
              </React.Fragment>
            );
          })
        }
      </div>
    </div>
  );
}

export default Content;
