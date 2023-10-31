import React from 'react';

function Notice() {
  return (
    <div id='notice'>
      <div className='notce_title'>
        <div>글제목</div>
        <div>날짜</div>
      </div>
      <div className='notice_line'>
        <div>키보드 서퍼에 오신 것을 환영합니다.</div>
        <div>2023.10.31.</div>
      </div>
      <div className='notice_content'>
        <p>
          키보드 서퍼에서는 다양한 키보드를 구비하였습니다.
          <br /><br />
          다양한 키보드, 예쁜 키보드, 가벼운 키보드, 화려한 키보드, RGB키보드<br />
          고객 여러분들께 좋은 제품을 선보일 수 있도록 노력하겠습니다.<br />
          찾아와주신 고객분들께 다시 한 번 감사의 말씀 드립니다.<br />
          <br /><br />
          감사합니다.
        </p>
      </div>
    </div>
  );
}

export default Notice;