import React from 'react';
import { useParams } from 'react-router-dom';
import { path, pathTitle, pathSub, pathName } from '../config.js';

function SideNavi() {
  const { sub_1 } = useParams();

  return (
    <div id="side_nav">
      <div className="side_title">{pathTitle[sub_1]}</div>
      {pathName[sub_1].map((value, index) => {
        return (
          <React.Fragment key={index}>
            <div className="side_btn">
              <a href={path.concat(pathSub[sub_1][index])}>{value}</a>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default SideNavi;