import React from 'react';

function Footer() {
  return (
    <div id="footer">
      <div className="top">
        <span><a href="#">사이트 소개</a></span> <span> | </span>
        <span><a href="#">개인정보취급방침</a></span> <span> | </span>
        <span><a href="#">이용약관</a></span> <span> | </span>
        <span><a href="#">이메일 무단 수집 금지</a></span>
      </div>
      <div className="bottom">
        <span>
          주소 :서울특별시 중구 세종대로 40 | 키보드 서퍼 | 대표 : 홍길동 : 
          사업자등록번호 : 123-45-67890 | 개인정보관리책임자 : 홍길동 <br />
          전화 : 031-123-4567(상담시간 : 오전 9시 ~ 오후 6시, 공휴일 휴무) | 이메일 : help@keyboardsurfer.com
        </span>
        <div className="friend_company"><img src='/img/friend_company.png' /></div>
        <div className="footer_logo"><img src='/img/logo_2.png' /></div>
      </div>
    </div>
  );
}

export default Footer;