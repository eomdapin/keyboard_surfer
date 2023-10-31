import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API_URL } from '../config.js';
import SubProduct from '../subpage/SubProduct.js';
import SideNavi from './SideNavi.js';
import BreadCrum from '../BreadCrum.js';
import SubView from '../subpage/SubView.js';
import Notice from '../subpage/Notice.js';
import Event from '../subpage/Event.js';

function SubBanner() {
  const { sub_1, sub_2, sub_3 } = useParams();
  const pageNumber = sub_2 && sub_2.slice(-1);
  const [imgs, setImgs] = useState(null);
  const pagePath = {
    notice: <Notice />,
    event: <Event />,
    sub_1: imgs && sub_3 ? <SubView imgs={imgs} /> : <SubProduct imgs={imgs} />,
    sub_2: imgs && sub_3 ? <SubView imgs={imgs} /> : <SubProduct imgs={imgs} />,
    sub_3: imgs && sub_3 ? <SubView imgs={imgs} /> : <SubProduct imgs={imgs} />,
    sub_4: imgs && sub_3 ? <SubView imgs={imgs} /> : <SubProduct imgs={imgs} />,
    sub_5: imgs && sub_3 ? <SubView imgs={imgs} /> : <SubProduct imgs={imgs} />,
  }

  useEffect(() => {
    fetch(API_URL.concat(pageNumber))
      .then(response => response.json())
      .then(response => setImgs(response.hits))
  }, [pageNumber]);

  return (
    <>
      <div id='subBanner'>
        <div>키보드 서퍼에 오신 것을 환영합니다.</div>
      </div>
      <SideNavi />
      <div id="sub_content">
        <BreadCrum />
        {pagePath[sub_2]}
      </div>
    </>
  );
}

export default SubBanner;
