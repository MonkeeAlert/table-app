import React from 'react';
import { useStore, useDispatch } from 'react-redux';
import { Table } from './components/Table/Table';
import { LoadMore } from './components/Table/LoadMore';
import { getData, updateCurrent } from './redux/actions';
import { sortBy } from './utils/functions';

import './scss/main.scss';

// todo (milestones):
// 1. tests
// 2. js ~~~> ts

const App = _ => {
  const store = useStore();
  const dispatch = useDispatch();

  const { filterBy, orderBy } = store.getState();

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then( response => response.json() )
    .then( data => {
      const d = Object.values(data).length > 0 ? sortBy(data, filterBy, orderBy) : [] ;
      dispatch( getData(d) );
    } )
    .then( _ => {
      const { data } = store.getState();
      
      if(data.length > 0) {
        const slice = data.slice(0, 5);
        dispatch( updateCurrent( slice ) );
      }
    } 
  );

  return (
    <main className="app__main">
      <Table store={store} dispatch={dispatch} />
      <LoadMore store={store} dispatch={dispatch} initialStep={10} />
    </main>
  );
}

export default App;