/*
 * @Author: Jan-superman 
 * @Date: 2018-10-11 20:32:31 
 * @Last Modified by:   Jan-superman 
 * @Last Modified time: 2018-10-11 20:32:31 
 */

import React from 'react';

const BizIcon = props => {
  const { type } = props;
  return <i className={`iconfont icon-${type}`} />;
};
export default BizIcon;
