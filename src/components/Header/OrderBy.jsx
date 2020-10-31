import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setOrder } from '../../redux/actions';
import { getTranslation, order, screens, getWindowSize } from '../../utils/functions';

const mapStateToProps = state => ({ ...state, orderBy: state.orderBy });

export const OrderBy = connect(mapStateToProps)(
  ({ store, dispatch }) => {
    const [ width, setWidth ] = useState( getWindowSize().w );
    const { language, orderBy, filterBy } = store.getState();
    
    useEffect( _ => {
      window.addEventListener('resize', _ => {
        setWidth( getWindowSize().w )
      })
    });

    return(
      <ul className="list header__filter-list">
        {
          order.map( (o, k) => {
            const { key, icon, status } = o;
            const isFalsy = k % 2 !== 0;

            return(
              <li key={k} className="header__filter-list-item">
              <input 
                type="radio" 
                name="order_by" 
                checked={ orderBy === key ? true : false}
                onChange={ _ => dispatch( setOrder(key) ) }
                className="header__filter-input"
              />
              <span className="header__filter-list-title">
                { 
                  width > screens.tablet ?
                    getTranslation( 
                      language, 
                      filterBy !== 'completed' ? 
                        key : isFalsy ? 
                          'byDone' : 'byNotDone' 
                    ) :
                    filterBy !== 'completed' ?
                      <img src={icon} alt={key} className="header__filter-icon" /> : 
                      <img src={status.icon} alt={status.key} className="header__filter-icon"/>
                }
              </span>
            </li>
            )
          })
        }
      </ul>
    )
  }
);