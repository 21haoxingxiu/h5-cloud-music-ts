/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-09 21:40:33
 * @LastEditors: zhan
 * @LastEditTime: 2020-06-09 22:30:19
 */ 
import * as actionTypes from './constants';
import {
  getHotSingerListRequest,
  getSingerListRequest
} from "../../../api/singers";

import { SingerStateType } from './data';


export interface changeSingerListType {
  type: typeof actionTypes.CHANGE_SINGER_LIST;
  data: SingerStateType
}

export interface changeEnterLoadingType {
  type: typeof actionTypes.CHANGE_ENTER_LOADING;
  data: boolean
}

export const changeSingerList = (data:any):changeSingerListType => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  data
})

export const changePageCount = (data:number) => ({
  type: actionTypes.CHANGE_PAGE_COUNT,
  data
})



export const changeEnterLoading = (data:boolean):changeEnterLoadingType => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})

export const changePullDownLoading = (data:boolean) => ({
  type: actionTypes.CHANGE_PULLDOWN_LOADING,
  data
})

//滑动最底部loading
export const changePullUpLoading = (data:boolean) => ({
  type: actionTypes.CHANGE_PULLUP_LOADING ,
  data
});


//第一次加载热门歌手
export const getHotSingerList = () => {
  return (dispatch:any) => {
    getHotSingerListRequest(0).then((res:any) => {
      const data = res.artists;
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
    }).catch(() => {
      console.log('热门歌手数据获取失败');
    })
  }
};

//加载更多热门歌手
export const refreshMoreHotSingerList = () => {
  return (dispatch:any, getState:any) => {
    const pageCount = getState().pageCount;
    const singerList = getState().singerList;
    getHotSingerListRequest(pageCount).then((res:any) => {
      const data = [...singerList, ...res.artists];
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false));
    }).catch(() => {
      console.log('热门歌手数据获取失败');
    });
  }
};

//第一次加载对应类别的歌手
export const getSingerList = (category:string, alpha:string) => {
  return (dispatch:any) => {
    getSingerListRequest(category, alpha, 0).then((res:any) => {
      const data = res.artists;
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
    }).catch(() => {
      console.log('歌手数据获取失败');
    });
  }
};

//加载更多歌手
export const refreshMoreSingerList = (category:string, alpha:string) => {
  return (dispatch:any, getState:any) => {
    const pageCount = getState().pageCount;
    const singerList = getState().singerList;
    getSingerListRequest(category, alpha, pageCount).then((res:any) => {
      const data = [...singerList, ...res.artists];
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false));
    }).catch(() => {
      console.log('歌手数据获取失败');
    });
  }
};