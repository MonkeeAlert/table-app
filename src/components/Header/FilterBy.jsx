import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../redux/actions';
import { getTranslation, filters } from '../../utils/functions';

const mapStateToProps = state => ({ ...state, filterBy: state.filterBy });

export const FilterBy = connect(mapStateToProps)(
  ({ store, dispatch }) => {
    const { language, filterBy } = store.getState();

    const handleChange = criteria => dispatch( setFilter( criteria ) );
  
    return(
      <ul className="list header__filter-list">
        {
          filters.map( (f, k) => (
            <li key={k} className="header__filter-list-item">
              <input 
                type="radio" 
                name="filter_by" 
                checked={ filterBy === f ? true : false} 
                className="header__filter-input"
                onChange={ _ => handleChange(f) }
              />
              <span className="header__filter-list-title">
                { getTranslation( language, f ) }
              </span>
            </li>
          ))
        }
      </ul>
    ) 
  }
);