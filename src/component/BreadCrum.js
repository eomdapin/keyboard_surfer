import React from 'react';
import { useParams } from 'react-router';

function BreadCrum() {
  const { sub_2 } = useParams();
  
  const pageName = {
    sub_1: '풀배열 키보드',
    sub_2: '텐키리스 키보드',
    sub_3: '66KEY 키보드',
    sub_4: '마우스 패드',
    sub_5: '악세서리',
  };

  return (
    <div id="breadcrum">{pageName[sub_2]}</div>
  );
}

export default BreadCrum;