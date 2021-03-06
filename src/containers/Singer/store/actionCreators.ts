/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-09 21:40:33
 * @LastEditors: zhan
 * @LastEditTime: 2020-07-17 09:27:00
 */ 
import * as actionTypes from './constants';
import {
  getSingerRequest,
} from "../../../api/singer";

export interface changeEnterLoadingType {
  type: typeof actionTypes.CHANGE_ENTER_LOADING;
  data: boolean
}

export const changeEnterLoading = (data:boolean):changeEnterLoadingType => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})

 export const changeSinger = (data:any) => ({
  type: actionTypes.CHANGE_SINGER_INFO,
  data
})

export const getSinger = (id: string) => {
  return (dispatch:any) => {
    getSingerRequest(id).then((res:any) => {
      dispatch(changeSinger(res))
      dispatch(changeEnterLoading(false))
    }).catch(() => {
      console.log('获取个人信息失败');
    })
  }
};
