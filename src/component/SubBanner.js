import React from 'react';
import { useParams } from 'react-router';
import SubProduct from './SubProduct.js';
import SideNavi from './SideNavi.js';
import BreadCrum from './BreadCrum.js';
import SubView from './SubView.js';

function SubBanner() {
  const { sub_3 } = useParams();
  
  return (
    <>
      <div id='subBanner'>
        <div>키보드 서퍼에 오신 것을 환영합니다.</div>
      </div>
      <SideNavi />
      <div id="sub_content">
        <BreadCrum />
        { sub_3 ? <SubView /> : <SubProduct />}
      </div>
    </>
  );
}

export default SubBanner;
