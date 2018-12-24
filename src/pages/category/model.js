import { rtsGetCategorysList, rtsGetSubcategories } from '@/services';
import { Toast } from 'antd-mobile';

export default {
  namespace: 'category',
  state: {
    firstList: [],
    SubcategoriesList: [],
    activeTab: null,
  },
  effects: {
    *GetCategorysList({ payload }, { call, put }) {
      const response = yield call(rtsGetCategorysList, payload);
      const { code, message, data } = response;
      if (code !== 0) {
        Toast.fail(message);
      } else {
        yield put({
          type: 'getGetagoryData',
          payload: {
            firstList: data,
          },
        });

        // 一级分类第一个id，获取子分类
        yield put({
          type: 'GetSubcategories',
          payload: {
            categoryId: data[0].categoryId,
          },
        });
      }
    },
    *GetSubcategories({ payload }, { call, put }) {
      const response = yield call(rtsGetSubcategories, payload);
      const { code, message, data } = response;
      if (code !== 0) {
        Toast.fail(message);
      } else {
        yield put({
          type: 'getGetagoryData',
          payload: {
            SubcategoriesList: data,
            activeTab: payload.categoryId,
          },
        });
      }
    },
  },
  reducers: {
    getGetagoryData(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
