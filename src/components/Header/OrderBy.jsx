import React from 'react';
import { connect } from 'react-redux';
import { setOrder } from '../../redux/actions';
import { getTranslation, order } from '../../utils/functions';

const mapStateToProps = state => ({ ...state, orderBy: state.orderBy });

export const OrderBy = connect(mapStateToProps)(
  ({ store, dispatch }) => {
    const { language, orderBy, filterBy } = store.getState();

    return(
      <ul className="list header__filter-list">
        {
          order.map( (o, k) => {
            const isFalsy = k % 2 !== 0;

            return(
              <li key={k} className="header__filter-list-item">
              <input 
                type="radio" 
                name="order_by" 
                checked={ orderBy === o ? true : false}
                onChange={ _ => dispatch( setOrder(o) ) }
                className="header__filter-input"
              />
              <span className="header__filter-list-title">
                { 
                  getTranslation( 
                    language, 
                    filterBy !== 'completed' ? 
                      o : isFalsy ? 'byDone' : 'byNotDone' 
                  ) 
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