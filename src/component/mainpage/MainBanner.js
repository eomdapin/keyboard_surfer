import React from 'react';
import Content from './Content.js';
import { Carousel } from 'antd';

function MainBanner() {
  return (
    <>
      <div id='main_banner'>
        <div className="desc">키보드 서퍼에 오신 것을 환영합니다.</div>
        <Carousel autoplay>
          <div>
            <h3 className="bg_01"></h3>
          </div>
          <div>
            <h3 className="bg_02"></h3>
          </div>
          <div>
            <h3 className="bg_03"></h3>
          </div>
        </Carousel>
      </div>
      <Content />
    </>
  );
}

export default MainBanner;
