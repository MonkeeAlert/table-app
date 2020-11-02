import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import { l18n } from '../utils/functions';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const middlewares = [ ReduxThunk ];

export const initialState = {
  data: [],
  current: [],
  filterBy: 'id',
  orderBy: 'asc',
  view: 'table',
  language: l18n[0].key
}

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers( applyMiddleware( ...middlewares ) )
); 