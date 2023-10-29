import React from 'react'
import logo from '../img/logo_2.png';
import login from '../img/login.png';
import shoping from '../img/shoping.png';


function Header() {
  return (
    <div id='header'>
      <div className='logo'>
        <a href="/keyboard_surfer"><img src={logo} alt="로고" /></a>
      </div>
      <div className='nav'>
        <ul>
          <li><a href="/keyboard_surfer/">공지사항</a>
            <ul className="sub_nav">
              <li><a href="/keyboard_surfer/">공지사항</a></li>
              <li><a href="/keyboard_surfer/">이벤트</a></li>
            </ul>
          </li>
          <li><a href="/keyboard_surfer/product/sub_1">상품 목록</a>
            <ul className="sub_nav">
              <li><a href="/keyboard_surfer/product/sub_1">풀배열 키보드</a></li>
              <li><a href="/keyboard_surfer/product/sub_2">텐키리스 키보드</a></li>
              <li><a href="/keyboard_surfer/product/sub_3">66Key 키보드</a></li>
              <li><a href="/keyboard_surfer/product/sub_4">마우스 패드</a></li>
              <li><a href="/keyboard_surfer/product/sub_5">악세서리</a></li>
            </ul>
          </li>
          <li><a href="/keyboard_surfer/">자유게시판</a>
            <ul className="sub_nav">
              <li><a href="/keyboard_surfer/">자유게시판</a></li>
              <li><a href="/keyboard_surfer/">출석체크</a></li>
            </ul>
          </li>
          <li><a href="/keyboard_surfer/">마이페이지</a>
            <ul className="sub_nav">
              <li><a href="/keyboard_surfer/">주문조회</a></li>
              <li><a href="/keyboard_surfer/">주문취소</a></li>
              <li><a href="/keyboard_surfer/">장바구니</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='login_box'>
        <a href="/keyboard_surfer/"><img src={login} alt="로그인"/></a>
        <a href="/keyboard_surfer/"><img src={shoping} alt="장바구니"/></a>
      </div>
    </div>
  );
}

export default Header;
