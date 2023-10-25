import React from 'react'

function Header() {
  return (
    <div id='header'>
      <div className='logo'>
        <img src='img/logo_2.png' />
      </div>
      <div className='nav'>
        <ul>
          <li>공지사항</li>
          <li>상품 목록</li>
          <li>자유게시판</li>
          <li>마이페이지</li>
        </ul>
      </div>
      <div className='login_box'>
        <a href="#"><img src='/' /></a>
        <a href="#"><img src='/' /></a>
      </div>
    </div>
  );
}

export default Header;
