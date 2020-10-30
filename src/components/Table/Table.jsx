import React from 'react';
import { connect } from 'react-redux';
import { sortBy, getPhone } from '../../utils/functions';

const mapStateToProps = state => (
  { 
    ...state, 
    current : [ ...state.current ],
    view : state.view
  }
);

export const Table = connect(mapStateToProps)(
  ({ store, dispatch }) => {

    const data = sortBy(store.getState().current, store.getState().filterBy, store.getState().orderBy);

    return(
      <ul className={`list table${ store.getState().view === 'grid' ? '--grid' : ''}`}>
        {
          data.map( (l, k) => {
            const { id, name, username, email, address, phone, company } = l;

            const { city, street, suite, zipcode } = address;
            const phoneStr = getPhone(phone);

            return(
              <li key={id} className="table__row">
                <div className="table__block table__block--id text--center">
                  <p className="text text--reg text--grey table__text--small">#{id}</p>
                </div>

                <div className="table__block table__block--name text--left">
                  <p className="text text--header text--graphite table__name table__text--large">
                    {name} <span className="text--reg text--grey">@{username}</span> 
                  </p>
                  <a href={`mailto:${email}`} className="text text--reg text--link text--blue table__text--small">
                    {email}
                  </a>
                </div>  

                <div className="table__block table__block--company text--left">
                  <p className="text text--header text--graphite table__text--small">
                    {company.name}
                  </p>  
                  <p className="text text--reg text--grey text--left table__text--small">
                    {company.bs}
                  </p>  
                </div>  

                <div className="table__block table__block--address text--left">
                  <p className="text text--reg text--graphite table__text--small">
                    {city}, {street} st., {suite}
                  </p>  
                  <p className="text text--header text--graphite table__text--small">
                    {zipcode}
                  </p>  
                </div>  

                <div className="table__block table__block--phone text--right">
                  <a 
                    href={`tel: ${ phoneStr }`} 
                    className="text--reg text--link text--blue table__text--small"
                  >{ phoneStr }
                  </a>  
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
)