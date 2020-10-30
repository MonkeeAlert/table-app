import React from 'react';
import { useStore, useDispatch } from 'react-redux';
import { Table } from './components/Table/Table';
import { LoadMore } from './components/Table/LoadMore';
import { getData, updateCurrent } from './redux/actions';
import { sortBy } from './utils/functions';

import './scss/main.scss';

// todo:
// 1. get data [x]
// 2. activate sort criteria [x]
// 3. render data following our sort criteria [x]
// 4. view toggler [x]
// 5. load more [x]
// 6. language change [x]
// 7. empty table view

const App = _ => {
  const store = useStore();
  const dispatch = useDispatch();

  fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json() )
    .then( data => {
      const d = sortBy(data, store.getState().filterBy, store.getState().orderBy) ;
      dispatch( getData(d) );
    } )
    .then( _ => {
      const slice = store.getState().data.slice(0, 5);
      dispatch( updateCurrent( slice ) );
    } );

  return (
    <main className="app__main">
      <Table store={store} dispatch={dispatch} />
      <LoadMore store={store} dispatch={dispatch} initialStep={2} />
    </main>
  );
}

export default App;
