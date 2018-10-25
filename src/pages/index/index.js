/*
 * @Author: Jan-superman 
 * @Date: 2018-09-27 20:38:37 
 * @Last Modified by: Jan-superman
 * @Last Modified time: 2018-10-10 00:45:37
 */

import React, { PureComponent } from 'react';
import styles from './index.less';

class Index extends PureComponent {
  render() {
    const { route } = this.props;
    return (
      <div className={styles.index}>
        <div className={styles.test}>{route.title}</div>
      </div>
    );
  }
}

export default Index;
