import React from 'react';
import { useParams } from 'react-router';

function SubBox(props) {
  const { sub_2 } = useParams();

  return (
    <div className="sub_box">
      <a href={`/keyboard_surfer/product/${sub_2}/${props.index}`}>
        <img src={props.src} alt={props.src} />
        <div className="title">키보드 상품명 {props.index+1}</div>
        <div className="price">139,000원</div>
      </a>
    </div>
  );
}

export default SubBox;