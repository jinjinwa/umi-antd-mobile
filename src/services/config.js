/*
 * @Author: Jan-superman 
 * @Date: 2018-10-14 16:02:44 
 * @Last Modified by:   Jan-superman 
 * @Last Modified time: 2018-10-14 16:02:44 
 */

import { stringify } from 'qs';
import request from './request';

const dev = process.env.NODE_ENV === 'development';
const defaultHost = () => 'https://hddtest.jahwaec.com';

// 请求地址是当前访问地址
const currentHost = () => {
  if (dev || /^[\d]|localhost/.test(window.location.host)) return defaultHost;
  return `${window.location.origin}`;
};
// 自定义前缀，对应后端微服务
const apiUrlfun = val => {
  if (val) {
    return `${currentHost()}/api/${val}`;
  }
  return `${currentHost()}/api`;
};

export { stringify, apiUrlfun, request };
