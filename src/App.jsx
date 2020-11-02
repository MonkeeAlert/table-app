import React from 'react';
import { useStore, useDispatch } from 'react-redux';
import { Table } from './components/Table/Table';
import { LoadMore } from './components/Table/LoadMore';

import './scss/main.scss';

// todo (milestones):
// 1. tests
// 2. js ~~~> ts

const App = _ => {
  const store = useStore();
  const dispatch = useDispatch();

  return (
    <main className="app__main">
      <Table store={store} dispatch={dispatch} />
      <LoadMore store={store} dispatch={dispatch} initialStep={10} />
    </main>
  );
}

export default App;
