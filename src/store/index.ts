/*
 * @Description: new file
 * @Autor: zhan
 * @Date: 2020-06-08 21:50:10
 * @LastEditors: zhan
 * @LastEditTime: 2020-06-10 22:14:29
 */ 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

export const composeStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type AppState = ReturnType<typeof rootReducer>;
