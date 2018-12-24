/*
 * @Author: Jan-superman 
 * @Date: 2018-09-27 20:37:59 
 * @Last Modified by: superman
 * @Last Modified time: 2018-12-24 23:32:29
 */

import React from 'react';
import { ActivityIndicator } from 'antd-mobile';

export default () => (
  <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
    <ActivityIndicator text="正在加载" style={{ margin: '0 auto' }} />
  </div>
);
