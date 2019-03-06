/**
 * 把模块化的接口文件统一进index暴露出去
 * @author 李啸竹
 */
import api from "@/utils/globalApi";

const workList = params => api.getApiData("signin", params);

export default {
  workList
};
