/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-09 08:36:40
 * @LastEditors: zhan
 * @LastEditTime: 2020-07-20 13:33:50
 */ 
import {
  CHANGE_CURRENT_ALBUM,
  CHANGE_LOADING,
  CHANGE_PULL_UP_LOADING,
} from './constants';
import { getRecommendListDetailRequest } from './services';

export const changeCurrentAlbum = (data: any) => ({
  type: CHANGE_CURRENT_ALBUM,
  data,
});

export const changePullUpLoading = (data: boolean) => ({
  type: CHANGE_PULL_UP_LOADING,
  data,
});

export const changeLoading = (data: boolean) => ({
  type: CHANGE_LOADING,
  data,
});
export const getAlbumList = (id: number, fromURL: string) => {
  return (dispatch: any) => {
    dispatch(changeLoading(true));
    getRecommendListDetailRequest(id)
      .then((res: any) => {
        dispatch(changeLoading(false));
        let data = res.playlist;
        dispatch(changeCurrentAlbum(data));
        // dispatch(changeStartIndex(0));
        // dispatch(changeTotalCount(data.tracks.length))
      })
      .catch(() => {
        console.log('获取album数据失败!');
      });
  };
};
