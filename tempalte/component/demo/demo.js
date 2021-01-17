/**
 * @file message-template-editor-core Demo
 * @author yantian@sensorsdata.cn
 */

import React from 'react';
import genRequest from 'sensorsdata/src/extensions/request';
import { intl } from '@sc/intl';
import style from './index.less';

function setCookie(name, value) {
  const d = new Date();
  d.setTime(d.getTime() + (2 * 24 * 60 * 60 * 1000));
  const expires = `expires=${d.toGMTString()}`;
  document.cookie = `${name}=${value}; ${expires}`;
}

/** 调试前准备 */
// 登录token
setCookie('sensorsdata-token', 'ih8jBHVV2ANdG4mPQdBhtRMVW8dYwSEX96mYsayscdhtGYXi4sD3URV50hv7mqPGjPIO1PwBs62bNAvrhXVp9lcEcg7jOyIBSfmFspYW5tOx5aaoxXwvPfPbBxpbyTbb');
// 微信ID
const wx_authorizer_id = 339;
const request = genRequest({
  getState: () => ({
    global: {
      projectName: 'default',
      productName: 'SF',
      intl: { locale: null },
    },
  }),
});

const Warper = () => {
  
  
  return (
    <div>
      go
    </div>
      
  );
};
export default Warper;
