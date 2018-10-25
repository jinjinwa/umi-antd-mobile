import React from 'react';
import { shallow } from 'enzyme';
import Test from '../pages/test'; // 引入对应的 React 组件

it('renders with Result', () => {
  const wrapper = shallow(<Test route={{ title: '测试名称' }} />); // 进行渲染
  expect(wrapper.find('Button').length).toBe(1); // 有 Button 组件
});
