import React from 'react';
import { useParams } from 'react-router-dom';

function SideNavi() {
  const { sub_1, sub_2 } = useParams();
  const path = '/keyboard_surfer/'
  const pathTitle = {
    notice: '공지사항',
    product: '상품목록',
  }
  const pathSub = {
    sub_1: 'product/sub_1',
    sub_2: 'product/sub_2',
    sub_3: 'product/sub_3',
    sub_4: 'product/sub_4',
    sub_5: 'product/sub_5',
    notice: 'notice',
    event: 'event',
  };
  const pathName = {
    notice: ['공지사항', '이벤트'],
    product: ['풀배열 키보드', '텐키리스 키보드', '66Key 키보드', '마우스 패드', '악세서리'],
  };


  return (
    <div id="side_nav">
      <div className="side_title">{pathTitle[sub_1]}</div>
      {pathName[sub_1].map((value, index) => {
        return (
          <React.Fragment key={index}>
            <div className="side_btn">
              <a href={path.concat(pathSub[sub_2])}>{value}</a>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default SideNavi;