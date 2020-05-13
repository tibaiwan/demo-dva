import { getProducts } from '../services/products';

export default {
    namespace: 'products',
    state: [],
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        history.listen(location => {
          console.log('location', location);
          // 路由鉴权
        });
      },
    },
    effects: {
      *fetchProducts({ payload }, { call, put }) {  // eslint-disable-line
        const result = yield call(getProducts, payload);
        yield put({ type: 'init', payload: result.data } );
      },
    },
    reducers: {
      'init'(state, { payload }) {
        return payload
      },
      'delete'(state, { payload }) {
        return state.filter(item => item.id !== payload);
      },
    },
};