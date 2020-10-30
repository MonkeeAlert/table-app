import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { l18n } from '../utils/functions';

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
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 