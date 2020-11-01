import React from 'react';
import { connect } from 'react-redux';
import { Empty } from '../Empty/Empty';
import { sortBy, getTranslation } from '../../utils/functions';

const mapStateToProps = state => (
  { 
    current : [ ...state.current ],
    view : state.view
  }
);

export const Table = connect(mapStateToProps)(
  ({ store }) => {
    const { view, language, current, filterBy, orderBy } = store.getState();

    const data = sortBy(current, filterBy, orderBy);

    if(data.length === 0) return <Empty store={store} />
    return(
      <ul className={`list table${ view === 'grid' ? '--grid' : ''}`}>
        {
          data.map( (l, k) => {
            const { id, userId, title, completed } = l;

            return(
              <li key={id} className="table__row">
                <div className="table__block table__block--id text--left">
                  <p className="text text--reg text--grey table__text--small">#{id} / @{userId}</p>
                </div>

                <div className="table__block table__block--title text--left">
                  <p className="text text--header text--graphite table__name table__text--large">{title}</p>
                </div>

                <div className={`table__block table__block--status table__block--status-${ completed ? 'green' : 'red' } text--right`}>
                  <p className={`text text--reg text--${ completed ? 'green' : 'red' } table__text--small`}>
                    { getTranslation( language, completed ? 'done' : 'notDone') }
                  </p>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
)