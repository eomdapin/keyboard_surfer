import React from 'react';
import { useParams } from 'react-router';

function SubBox() {
  const { sub_2 } = useParams();
  
  return (
    <div className="sub_box">
      <a href={`/product/${sub_2}/1`}>
        <img src="/img/3.jpg" alt="/img/3.jpg" />
        <div className="title">키보드 상품명 1</div>
        <div className="price">139,000원</div>
      </a>
    </div>
  );
}

export default SubBox;