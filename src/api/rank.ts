/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-07-20 10:01:47
 * @LastEditors: zhan
 * @LastEditTime: 2020-07-20 10:01:47
 */ 

import { axiosInstance } from "../utils/request";


export const getRankListRequest  = () => {
  return axiosInstance.get(`/toplist/detail`);
};