import React from 'react';

function SubView() {
  return (
    <>
      <div className="product_img"><img src="/img/1.jpg" alt="1.jpg" /></div>
      <div className="product_info">
        <div className="title">키보드 상품명 1</div>
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
          <button className="buy"><a href="#">구매하기</a></button>
          <button className="wish_list"><a href="#">장바구니</a></button>
        </form>
      </div>
      <div className="sub_desc"><img src="/img/subview.jpg" alt="상품 상세안내" /></div>
    </>
  );
}

export default SubView;