import React, { useState } from 'react'

function Header() {
  return (
    <div id='header'>
      <div className='logo'>
        <a href="/"><img src='img/logo_2.png' /></a>
      </div>
      <div className='nav'>
        <ul>
          <li>공지사항
            <ul className="sub_nav">
              <li>공지사항</li>
              <li>이벤트</li>
            </ul>
          </li>
          <li>상품 목록
            <ul className="sub_nav">
              <li>풀배열 키보드</li>
              <li>텐키리스 키보드</li>
              <li>66Key 키보드</li>
              <li>마우스 패드</li>
              <li>악세서리</li>
            </ul>
          </li>
          <li>자유게시판
            <ul className="sub_nav">
              <li>자유게시판</li>
              <li>출석체크</li>
            </ul>
          </li>
          <li>마이페이지
            <ul className="sub_nav">
              <li>주문조회</li>
              <li>주문취소</li>
              <li>장바구니</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='login_box'>
        <a href="#"><img src='img/login.png' /></a>
        <a href="#"><img src='img/shoping.png' /></a>
      </div>
    </div>
  );
}

export default Header;
