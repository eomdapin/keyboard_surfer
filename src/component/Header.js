import React from 'react'

function Header() {
  return (
    <div id='header'>
      <div className='logo'>
        <a href="/"><img src='img/logo_2.png' /></a>
      </div>
      <div className='nav'>
        <ul>
          <li>공지사항
            <ul style={{ display: 'none' }}>
              <li>공지사항</li>
              <li>이벤트</li>
            </ul>
          </li>
          <li>상품 목록</li>
          <li>자유게시판</li>
          <li>마이페이지</li>
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
