import React from 'react';
import { connect } from 'react-redux';
import { updateCurrent } from '../../redux/actions';
import { getTranslation } from '../../utils/functions';

const mapStateToProps = state => ({ data: [ ...state.data ], current: [ ...state.current ] })

export const LoadMore = connect(mapStateToProps)(
  ({ store, dispatch, initialStep }) => {
    const { data, current, language } = store.getState();

    const step = data.length - current.length <= initialStep ? data.length - current.length : initialStep;

    const loadMore = _ => {
      const currentIds = current.map( c => c.id);

      const arr = data.filter( d => !currentIds.includes(d.id) ).filter( (_, k) => k < initialStep);
      dispatch( updateCurrent([...current, ...arr]) );
    }
  
    if( step <= 0 || current.length === 0) return null;
    return (
      <button 
        className="button button--blue button--load-more"
        onClick={ loadMore }
      >
        { `${ getTranslation( language, 'loadMore' ) } ${step}` }
      </button>
    )
  }
)