/**
 * @file message-template-editor-core Demo
 * @author yantian@sensorsdata.cn
 */

import './locale';
import React from 'react';

/**
 * 依赖第三方库的样式文件
 */
import 'antd/dist/antd.less';

/**
 * 加载 UIKit 主题样式文件
 */
import 'theme/theme.less';


/**
 * 导入要演示的组件
 */
import Demo from './demo';

/**
 * 导出组件，必须严格按如下格式
 */
export default {
  // 组件名称
  name: 'sf-wechat-test-send',
  // 组件渲染函数
  render() {
    // 返回组件
    return <Demo/>;
  }
};
