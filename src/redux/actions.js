import { sortBy } from "../utils/functions";

export const getData = () => {
  return (dispatch, getState) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( response => response.json() )
    .then( data => { 
      let payload = Object.values(data).length > 0 ? sortBy(data, getState().filterBy, getState().orderBy) : []
      dispatch({ type: 'GET_DATA', payload }) 
    })
    .then( _ => { 
      let payload = getState().data.slice(0, 5);
      dispatch({ type: 'UPDATE_CURRENT', payload })
     })
  }
};

export const setFilter = payload => ({ type: 'SET_FILTER', payload });

export const setOrder = payload => ({ type: 'SET_ORDER', payload });

export const setView = payload => ({ type: 'SET_VIEW', payload });

export const updateCurrent = payload => ({ type: 'UPDATE_CURRENT', payload });

export const changeLanguage = payload => ({ type: 'CHANGE_LANGUAGE', payload });