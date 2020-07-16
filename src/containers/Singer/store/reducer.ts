/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-10 08:44:33
 * @LastEditors: zhan
 * @LastEditTime: 2020-06-10 13:45:19
 */ 
import * as actionTypes from './constants';
import produce from 'immer';
import { SingerItemStateType } from './data';

const defaultState: SingerItemStateType = {
  artist: {},
  hotSongList: [],
  enterLoading: true,
};

export default (state = defaultState, action: any) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.CHANGE_SINGER_INFO:
        draft.artist = action.data.artist;
        draft.hotSongList = action.data.hotSongs;
        break;
      case actionTypes.CHANGE_ENTER_LOADING:
        draft.enterLoading = action.data;
        break;
      default: 
        return state;
    }
  });
};
