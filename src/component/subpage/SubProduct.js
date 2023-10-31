import React from 'react';
import SubBox from './SubBox.js';

function SubProduct({ imgs }) {
  const arr = new Array(15).fill(null);
  
  return (
    <div id="sub_product">
      {arr.map((_, index) => {
        return (
          <React.Fragment key={index}>
            {imgs && <SubBox src={imgs[index].largeImageURL} index={index} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default SubProduct;