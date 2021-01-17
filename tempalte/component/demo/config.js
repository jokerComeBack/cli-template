/**
 * @file Storybook 配置，勿改
 * @author picheng@sensorsdata.cn
 * @see https://storybook.js.org/basics/guide-react/
 */

import { configure, storiesOf } from '@storybook/react';

// 组件 demo
import config from './index';

configure(() => {
  const story = storiesOf('组件示例', module);
  story.add(config.name, config.render);
}, module);
