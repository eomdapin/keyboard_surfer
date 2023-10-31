import React from 'react'
import { logo, login, shoping } from '../../img.js';
import { path, naviName, pathTitle, pathSub, pathName } from '../config.js';

function Header() {
  return (
    <div id='header'>
      <div className='logo'>
        <a href={path}><img src={logo} alt="로고" /></a>
      </div>
      <div className='nav'>
        <ul>
          {naviName.map((outValue, outIndex) => {
            return (
              <React.Fragment key={outIndex}>
                <li>
                  <a href={path.concat(pathSub[outValue][0])}>{pathTitle[outValue]}</a>
                  <ul className="sub_nav">
                    {pathName[outValue].map((inValue, inIndex) => {
                      return (
                        <React.Fragment key={inIndex}>
                          <li>
                            <a href={path.concat(pathSub[outValue][inIndex])}>{inValue}</a>
                          </li>
                        </React.Fragment>
                      );
                    })}
                  </ul>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
      <div className='login_box'>
        <a href="/keyboard_surfer/"><img src={login} alt="로그인" /></a>
        <a href="/keyboard_surfer/"><img src={shoping} alt="장바구니" /></a>
      </div>
    </div>
  );
}

export default Header;