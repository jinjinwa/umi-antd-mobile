/*
 * @Author: Jan-superman 
 * @Date: 2018-09-27 20:39:02 
 * @Last Modified by: Jan-superman
 * @Last Modified time: 2018-10-24 18:39:57
 */

import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from './index.less';

@connect(({ category }) => ({
  category,
}))
class Category extends PureComponent {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { route } = this.props;
    return <div className={styles.category}>{route.title}</div>;
  }
}

export default Category;
