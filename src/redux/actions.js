export const getData = payload => ({ type: 'GET_DATA', payload });

export const setFilter = payload => ({ type: 'SET_FILTER', payload });

export const setOrder = payload => ({ type: 'SET_ORDER', payload });

export const setView = payload => ({ type: 'SET_VIEW', payload });

export const updateCurrent = payload => ({ type: 'UPDATE_CURRENT', payload });

export const changeLanguage = payload => ({ type: 'CHANGE_LANGUAGE', payload });

// export const toggleFavourite = payload => ({ type: 'TOGGLE_FAVOURITE', payload })