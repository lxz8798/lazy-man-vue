/**
 * example 页面的接口请求
 * 李啸竹
 */

import api from "@/utils/globalApi";

const categroyList = params => api.getApiData("/goodbook/catalog", params);
const categroyDetail = params => api.getApiData("/goodbook/query", params);

export default {
    categroyList, categroyDetail
};
