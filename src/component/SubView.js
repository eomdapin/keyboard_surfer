import React from 'react';
import { useParams } from 'react-router-dom';
import subview from '../img/subview.jpg';

function SubView({ imgs }) {
  const { sub_3 } = useParams();

  return (
    <>
      <div className="product_img">
        <img src={imgs[sub_3].largeImageURL} alt={imgs[sub_3].largeImageURL} />
      </div>
      <div className="product_info">
        <div className="title">키보드 상품명 {parseInt(sub_3)+1}</div>
        <div className="price">139,000원</div>
        <form action="">
          <select className="option_1">
            <option>상품 추가옵션 1 (+ 0 )</option>
            <option>키캡 추가 (+ 50,000)</option>
            <option>키캡 리무버 추가 (+ 10,000)</option>
          </select>
          <select className="option_2">
            <option>상품 추가옵션 2 (+ 0 )</option>
            <option>안전 포장 추가 (+ 5,000)</option>
          </select>
          <div className="quantity">
            <label>수량</label>
            <input type="number" min="1" max="10" step="1" defaultValue="1"></input>
          </div>
          <button className="buy"><a href="/keyboard_surfer/">구매하기</a></button>
          <button className="wish_list"><a href="/keyboard_surfer/">장바구니</a></button>
        </form>
      </div>
      <div className="sub_desc"><img src={subview} alt="상품 상세안내" /></div>
    </>
  );
}

export default SubView;