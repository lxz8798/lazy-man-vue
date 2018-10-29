/**
 * example 页面的接口请求
 * 李啸竹
 */

import api from "@/utils/globalApi";

const categroyList = params => api.getApiData("/goodbook/catalog", params);
const categroyDetail = params => api.getApiData("/goodbook/query?catalog_id=257&pn=1&rn=10&dtype=&key=719af00cc3a686d1f23d0e91e698da29",params);
// 没有成功的并发请求例子
// const test1 = params => api.getApiData("/goodbook/query?catalog_id=257&pn=1&rn=10&dtype=&key=719af00cc3a686d1f23d0e91e698da29");
// const test2 = params => api.getApiData("/goodbook/query?catalog_id=257&pn=1&rn=10&dtype=&key=719af00cc3a686d1f23d0e91e698da29");
// const categroyAll = params => api.getApiData([test1,test2],"","all");
const testUpload = params => api.getApiData("/uploadTest",params,"upload");
export default {
    categroyList, categroyDetail,testUpload
};
