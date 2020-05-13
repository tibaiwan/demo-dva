import request from '../utils/request';

export const getProducts = (payload) => {
  return request('https://www.fastmock.site/mock/712c0ac8828df0f9d79616d1ce562d9b/product/getProductList');
}
