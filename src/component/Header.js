import React, { useState } from 'react'

function Header() {
  return (
    <div id='header'>
      <div className='logo'>
        <a href="/"><img src='/img/logo_2.png' /></a>
      </div>
      <div className='nav'>
        <ul>
          <li><a href="#">공지사항</a>
            <ul className="sub_nav">
              <li><a href="#">공지사항</a></li>
              <li><a href="#">이벤트</a></li>
            </ul>
          </li>
          <li><a href="#">상품 목록</a>
            <ul className="sub_nav">
              <li><a href="#">풀배열 키보드</a></li>
              <li><a href="#">텐키리스 키보드</a></li>
              <li><a href="#">66Key 키보드</a></li>
              <li><a href="#">마우스 패드</a></li>
              <li><a href="#">악세서리</a></li>
            </ul>
          </li>
          <li><a href="#">자유게시판</a>
            <ul className="sub_nav">
              <li><a href="#">자유게시판</a></li>
              <li><a href="#">출석체크</a></li>
            </ul>
          </li>
          <li><a href="#">마이페이지</a>
            <ul className="sub_nav">
              <li><a href="#">주문조회</a></li>
              <li><a href="#">주문취소</a></li>
              <li><a href="#">장바구니</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='login_box'>
        <a href="#"><img src='/img/login.png' /></a>
        <a href="#"><img src='/img/shoping.png' /></a>
      </div>
    </div>
  );
}

export default Header;
