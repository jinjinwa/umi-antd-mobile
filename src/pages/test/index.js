/*
 * @Author: Jan-superman 
 * @Date: 2018-09-27 20:38:37 
 * @Last Modified by: Jan-superman
 * @Last Modified time: 2018-10-24 16:11:55
 */

import React, { PureComponent } from 'react';
import { Button, Toast } from 'antd-mobile';

class Test extends PureComponent {
  componentDidMount() {
    console.log('1');
  }

  showToast = () => {
    Toast.info('This is a toast tips !!!', 10);
  };

  render() {
    const { route } = this.props;
    return (
      <div>
        <Button type="primary" onClick={this.showToast}>
          {route.title}
        </Button>
      </div>
    );
  }
}

export default Test;
