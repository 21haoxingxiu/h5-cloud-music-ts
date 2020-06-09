import * as actionTypes from './constants';
import produce from 'immer';
import { SingerStateType } from './data';

const defaultState: SingerStateType = {
  singerList: [],
  enterLoading: true, 
  pullUpLoading: false,
  pullDownLoading: false,
  pageCount: 0
};

export default (state = defaultState, action: any) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.CHANGE_SINGER_LIST:
        draft.singerList = action.data;
        break;
      case actionTypes.CHANGE_PAGE_COUNT:
        draft.pageCount = action.data;
        break;
      case actionTypes.CHANGE_ENTER_LOADING:
        draft.enterLoading = action.data;
      case actionTypes.CHANGE_PULLUP_LOADING:
        draft.pullUpLoading = action.data;
      case actionTypes.CHANGE_PULLDOWN_LOADING:
        draft.pullDownLoading = action.data;
      default:
        return state
    }
  });
};
