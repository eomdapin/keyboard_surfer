import React from 'react';

function MainProduct(props) {
  // 인기, 추천 상품
  if (props.className !== 'product') {
    return (
      <div className={props.className}>
        <img src={props.src} alt={props.alt} />
        <div className="link">
          <a href={props.href}>
            {(props.className === 'popular' ? '현재 인기상품' : '이번달 추천상품')}<br />
            <span>바로가기 &gt;&gt;</span>
          </a>
        </div>
      </div>
    );
  } else {
    // 그 외 하위 제품
    return (
      <div className={props.className}>
        <a href={props.href}>
          <img src={props.src} alt={props.alt} />
          <div>{props.alt}</div>
        </a>
      </div>
    );
  }
}

export default MainProduct;