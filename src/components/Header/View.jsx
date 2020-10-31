import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setView } from '../../redux/actions';
import { layouts, getTranslation, screens, getWindowSize } from '../../utils/functions'

const mapStateToProps = state => ({ view : state.view, language : state.language });

export const View = connect(mapStateToProps)( 
  ({ store, dispatch }) => {
    const [ width, setWidth ] = useState( getWindowSize().w );
    const { view, language } = store.getState();
    
    useEffect( _ => {
      window.addEventListener('resize', _ => {
        setWidth( getWindowSize().w )
      })
    });

    return(
      <section className="header__view">
        <ul className="list header__filter-list">
          {
            layouts.map( (l, k) => {
              const { key, icon } = l;
              
              return(
                <li key={k} className="header__filter-list-item">
                  <input 
                    type="radio" 
                    name="view" 
                    className="header__filter-input"
                    checked={ view === key ? true : false }
                    onChange={ _ => dispatch( setView(key) )}
                  />
                  <span className="header__filter-list-title">
                    { 
                      width > screens.tablet ? 
                        getTranslation( language, key ) : <img src={icon} alt={key} className="header__filter-icon" />
                    }
                  </span>
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  } 
)