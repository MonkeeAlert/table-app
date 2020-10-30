import React from 'react';
import { connect } from 'react-redux';
import { setOrder } from '../../redux/actions';
import { getTranslation, order } from '../../utils/functions';

const mapStateToProps = state => ({ ...state, orderBy: state.orderBy });

export const OrderBy = connect(mapStateToProps)(
  ({ store, dispatch }) => {
    return(
      <ul className="list header__filter-list">
        {
          order.map( (o, k) => (
            <li key={k} className="header__filter-list-item">
              <input 
                type="radio" 
                name="order_by" 
                checked={ store.getState().orderBy === o ? true : false}
                onChange={ _ => dispatch( setOrder(o) ) }
                className="header__filter-input"
              />
              <span className="header__filter-list-title">
                { getTranslation( store.getState().language, o) }
              </span>
            </li>
          ))
        }
      </ul>
    )
  }
);