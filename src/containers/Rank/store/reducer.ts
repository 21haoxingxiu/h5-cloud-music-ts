/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-10 08:44:33
 * @LastEditors: zhan
 * @LastEditTime: 2020-06-10 13:45:19
 */ 
import * as actionTypes from './constants';
import produce from 'immer';

const defaultState = {
  rankList: [],
  loading: true
};

export default (state = defaultState, action: any) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.CHANGE_RANK_LIST:
        draft.rankList = action.data;
        break;
      case actionTypes.CHANGE_LOADING:
        draft.loading = action.data;
        break;
      default: 
        return state;
    }
  });
};
