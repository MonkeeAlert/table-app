import React from 'react';
import { connect } from 'react-redux';
import { setView } from '../../redux/actions';
import { layouts, getTranslation } from '../../utils/functions'

const mapStateToProps = state => ({ ...state, view : state.view, language : state.language });

export const View = connect(mapStateToProps)( 
  ({ store, dispatch }) => {
    return(
      <section className="header__view">
        <ul className="list header__filter-list">
          {
            layouts.map( (l, k) => (
              <li key={k} className="header__filter-list-item">
                <input 
                  type="radio" 
                  name="view" 
                  className="header__filter-input"
                  checked={ store.getState().view === l ? true : false }
                  onChange={ _ => dispatch( setView(l) )}
                />
                <span className="header__filter-list-title">
                  { getTranslation( store.getState().language, l ) }
                </span>
              </li>
            ))
          }
        </ul>
      </section>
    )
  } 
)