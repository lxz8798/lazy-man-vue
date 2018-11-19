/**
 * example 页面的接口请求
 * 李啸竹
 */

import api from "@/utils/globalApi";

const categroyList = params => api.getApiData("/goodbook/catalog", params,'post');
const categroyDetail = params => api.getApiData("/goodbook/query?catalog_id=257&pn=1&rn=10&dtype=&key=719af00cc3a686d1f23d0e91e698da29",params);
// all的例子
const categroyListTwo = () => api.getApiData("/goodbook/catalog?dtype=json&key=719af00cc3a686d1f23d0e91e698da29");
const categroyDetailTwo = () => api.getApiData("/goodbook/query?catalog_id=257&pn=1&rn=10&dtype=&key=719af00cc3a686d1f23d0e91e698da29");
const categroyAll = () => api.getApiData([categroyListTwo(),categroyDetailTwo()],"",'all');
// upload的例子
// const testUpload = params => api.getApiData("//jsonplaceholder.typicode.com/posts/",params,'upload');
export default {
    categroyList, categroyDetail,categroyAll
};
