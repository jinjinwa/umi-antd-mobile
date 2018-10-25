/*
 * @Author: Jan-superman 
 * @Date: 2018-09-27 20:38:14 
 * @Last Modified by: Jan-superman
 * @Last Modified time: 2018-10-24 16:17:32
 */

import React, { PureComponent } from 'react';
import MenuBar from '@/components/MenuBar';

// 底部有bar菜单
const BarRoutes = ['/shop', '/', '/me', '/category'];

class BasicLayout extends PureComponent {
  render() {
    const { children, location } = this.props;

    if (BarRoutes.indexOf(location.pathname) < 0) {
      return <div>{children}</div>;
    }

    return <MenuBar pathname={location.pathname}>{children}</MenuBar>;
  }
}

export default BasicLayout;
