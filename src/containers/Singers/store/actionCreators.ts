/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-09 21:40:33
 * @LastEditors: zhan
 * @LastEditTime: 2020-06-21 11:07:47
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

export const changeCategory = (data:string) => ({
  type: actionTypes.CHANGE_CATOGORY,
  data
});

export const changeAlpha = (data:string) => ({
  type: actionTypes.CHANGE_ALPHA,
  data
});

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


export const getHotSingerList = () => {
  return (dispatch:any) => {
    getHotSingerListRequest(0).then((res:any) => {
      const data = res.artists;
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
      // dispatch(changePageCount(data.length));
    }).catch(() => {
      console.log('热门歌手数据获取失败');
    })
  }
};

export const refreshMoreHotSingerList = () => {
  return (dispatch:any, getState:any) => {
    const offset = getState().singers.pageCount;
    const singerList = getState().singers.singerList;
    getHotSingerListRequest(offset).then((res:any) => {
      const data = [...singerList, ...res.artists];
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false));
    }).catch(() => {
      console.log('热门歌手数据获取失败');
    });
  }
};

export const getSingerList = () => {
  return (dispatch:any, getState:any) => {
    const offset = getState().singers.pageCount;
    const category = getState().singers.category;
    const alpha = getState().singers.alpha;
    getSingerListRequest(category, alpha, offset).then((res:any) => {
      const data = res.artists;
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
    }).catch(() => {
      console.log('歌手数据获取失败');
    });
  }
};


export const refreshMoreSingerList = () => {
  return (dispatch:any, getState:any) => {
    const offset = getState().singers.pageCount;
    const category = getState().singers.category;
    const alpha = getState().singers.alpha;
    const singerList = getState().singers.singerList;
    getSingerListRequest(category, alpha, offset).then((res:any) => {
      const data = [...singerList, ...res.artists];
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false));
    }).catch(() => {
      console.log('歌手数据获取失败');
    });
  }
};