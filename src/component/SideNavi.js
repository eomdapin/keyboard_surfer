import React from 'react';

function SideNavi() {
  return (
    <div id="side_nav">
      <div className="side_title">상품 목록</div>
      <div className="side_btn"><a href="/keyboard_surfer/product/sub_1">풀배열 키보드</a></div>
      <div className="side_btn"><a href="/keyboard_surfer/product/sub_2">텐키리스 키보드</a></div>
      <div className="side_btn"><a href="/keyboard_surfer/product/sub_3">66KEY 키보드</a></div>
      <div className="side_btn"><a href="/keyboard_surfer/product/sub_4">마우스 패드</a></div>
      <div className="side_btn"><a href="/keyboard_surfer/product/sub_5">악세서리</a></div>
    </div>
  );
}

export default SideNavi;