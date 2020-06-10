/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-09 21:36:19
 * @LastEditors: zhan
 * @LastEditTime: 2020-06-10 13:41:13
 */ 
import { axiosInstance } from "../utils/request";


export const getHotSingerListRequest = (count:number) => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};

export const getSingerListRequest= (category:string, alpha:string, count:number) => {
  return axiosInstance.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
}