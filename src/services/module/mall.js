/*
 * @Author: Jan-superman 
 * @Date: 2018-10-14 16:02:35 
 * @Last Modified by: Jan-superman
 * @Last Modified time: 2018-10-14 16:06:34
 */

import { stringify, request, apiUrlfun } from '../config';

// 获取商品列表
export async function rtsGetCommodityList(params) {
  return request(`${apiUrlfun('mall')}/v1/commodities?${stringify(params)}`);
}

// 获取一级类目
export async function rtsGetCategorysList(params) {
  return request(`${apiUrlfun('mall')}/v1/categories?${stringify(params)}`);
}

// 获取二级类目
export async function rtsGetSubcategories(params) {
  return request(`${apiUrlfun('mall')}/v1/subcategories?${stringify(params)}`);
}
