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
  };
  if(sub_2) {
  return (
    <div id="breadcrum">{pageName[sub_2]}</div>
    );
  } else {
  return (
    <div id="breadcrum">{pageName[sub_1]}</div>
    );
  }
  
}

export default BreadCrum;