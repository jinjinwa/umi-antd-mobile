/*
 * @Author: Jan-superman 
 * @Date: 2018-09-27 20:39:02 
 * @Last Modified by: superman
 * @Last Modified time: 2018-12-25 01:03:00
 */

import React, { PureComponent } from 'react';
import { connect } from 'dva';
import ScrollWrap from '@/components/ScrollWrap';
// import Lazyimg from 'react-lazyimg-component';
// import { ActivityIndicator } from 'antd-mobile';
import styles from './index.less';

@connect(({ category, loading }) => ({
  category,
  // loading,
  firsstListLoading: loading.effects['category/GetCategorysList'],
}))
class Category extends PureComponent {
  constructor(props) {
    super(props);
    this.clientHeight = window.document.body.clientHeight;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'category/GetCategorysList',
    });
  }

  getRef = e => {
    this.container = React.cloneElement(e);
  };

  handleSetActiveTab = id => {
    const { dispatch } = this.props;
    dispatch({
      type: 'category/GetSubcategories',
      payload: {
        categoryId: id,
      },
    });
  };

  render() {
    const { category } = this.props;
    const { firstList, activeTab, SubcategoriesList } = category;
    // console.log(this.wrapNode);
    return (
      <div className={styles.category}>
        <div className={styles.searchbar} />
        <div style={{ height: `${this.clientHeight - 188}px`, position: 'relative' }}>
          <ScrollWrap wrapId="rootList" wrapClass={styles.category_tab}>
            {firstList.map(item => (
              <div
                onClick={() => {
                  this.handleSetActiveTab(item.categoryId);
                }}
                key={item.categoryId}
                className={`${styles.list_item} ${item.categoryId === activeTab ? styles.cur : ''}`}
              >
                {item.categoryName}
              </div>
            ))}
          </ScrollWrap>

          <ScrollWrap wrapId="rootContent" wrapClass={styles.category_content} getRef={this.getRef}>
            {SubcategoriesList.map(item => (
              <dl key={item.categoryId}>
                <dt>{item.categoryName}</dt>
                <dd className="clearfix">
                  {item.subSet.map(child => (
                    <div className={styles.categoriesItem} key={child.categoryId}>
                      <div className={styles.img_wrap}>
                        <img
                          src={child.categoryIcon}
                          alt={child.categoryName}
                          // container={this.container}
                        />
                      </div>
                      <p className={styles.describe}>{child.categoryName}</p>
                    </div>
                  ))}
                </dd>
              </dl>
            ))}
          </ScrollWrap>
        </div>
      </div>
    );
  }
}

export default Category;
