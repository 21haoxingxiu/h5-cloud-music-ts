/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-09 21:40:33
 * @LastEditors: zhan
 * @LastEditTime: 2020-06-21 11:07:47
 */ 
import * as actionTypes from './constants';
import {
  getRankListRequest
} from "../../../api/rank";


const changeRankList = (data:any) => ({
  type: actionTypes.CHANGE_RANK_LIST,
  data: data
})

const changeLoading = (data:boolean) => ({
  type: actionTypes.CHANGE_LOADING,
  data
})

export const getRankList = () => {
  return (dispatch:any) => {
    getRankListRequest().then((data:any) => {
      let list = data && data.list;
      dispatch(changeRankList(list));
      dispatch(changeLoading(false));
    })
  }
}
