/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-10 08:44:33
 * @LastEditors: zhan
 * @LastEditTime: 2020-06-10 13:45:19
 */ 
import * as actionTypes from './constants';
import produce from 'immer';
import { SingerStateType } from './data';

const defaultState: SingerStateType = {
  category: "",
  alpha: "",  
  singerList: [],
  enterLoading: true,
  pullUpLoading: false,
  pullDownLoading: false,
  pageCount: 0,
};

export default (state = defaultState, action: any) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.CHANGE_ALPHA:
        draft.alpha = action.data;
        draft.pageCount = 0;
        draft.enterLoading = true;
        break;
      case actionTypes.CHANGE_CATOGORY:
        draft.category = action.data;
        draft.pageCount = 0;
        draft.enterLoading = true;
        break;
      case actionTypes.CHANGE_SINGER_LIST:
        draft.singerList = action.data;
        break;
      case actionTypes.CHANGE_PAGE_COUNT:
        draft.pageCount = action.data;
        break;
      case actionTypes.CHANGE_ENTER_LOADING:
        draft.enterLoading = action.data;
        break
      case actionTypes.CHANGE_PULLUP_LOADING:
        draft.pullUpLoading = action.data;
        break;
      case actionTypes.CHANGE_PULLDOWN_LOADING:
        draft.pullDownLoading = action.data;
        break;
      default: 
        return state;
    }
  });
};
