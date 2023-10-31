import React from 'react';
import { useParams } from 'react-router';

function BreadCrum() {
  const { sub_1, sub_2 } = useParams();

  const pageName = {
    sub_1: '풀배열 키보드',
    sub_2: '텐키리스 키보드',
    sub_3: '66KEY 키보드',
    sub_4: '마우스 패드',
    sub_5: '악세서리',
    notice: '공지사항',
    event: '이벤트',
    freeboard: '자유게시판',
    todaycheck: '출석체크',
    ordersearch: '주문조회',
    ordercancel: '주문취소',
    cart: '장바구니',
  };

  return (
    <div id="breadcrum">{pageName[sub_2]}</div>
  );

}

export default BreadCrum;