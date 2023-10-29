import React, { useEffect, useState } from 'react';
import SubBox from './SubBox.js';
import { API_URL } from './config.js';

function SubProduct() {
  const arr = new Array(15).fill(null);
  const [imgs, setImgs] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(response => setImgs(response.hits));
  }, []);

  return (
    <div id="sub_product">
      {arr.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <SubBox />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default SubProduct;