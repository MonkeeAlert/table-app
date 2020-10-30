import React from 'react';
// import { useStore, useDispatch } from 'react-redux';
import { FilterBy } from './FilterBy';
import { OrderBy } from './OrderBy';

export const Filters = ({ store, dispatch }) => {

  return(
    <section className="header__filter">
      <FilterBy store={store} dispatch={dispatch} />
      <OrderBy store={store} dispatch={dispatch} />
    </section>
  )
} 