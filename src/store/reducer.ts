/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-08 21:50:10
 * @LastEditors: zhan
 * @LastEditTime: 2020-06-09 22:32:23
 */ 
import { combineReducers } from 'redux';
import recommendReducer from '../containers/Recommend/store/reducer';
import albumReducer from '../containers/Album/store/reducer';
import playerReducer from '../containers/Player/store/reducer';
import userReducer from '../containers/User/Login/store/reducer';
import singersreducer from '../containers/Singers/store/reducer'
import singerreducer from '../containers/Singers/store/reducer'

export const rootReducer = combineReducers({
  recommend: recommendReducer,
  album: albumReducer,
  player: playerReducer,
  user: userReducer,
  singers: singersreducer,
  singer: singerreducer
});
