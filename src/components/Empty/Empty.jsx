import React from 'react';
import { connect } from 'react-redux';
import { getTranslation } from '../../utils/functions';
import Forbidden from '../../svg/forbidden.svg';

const mapStateToProps = state => ({ language : state.language });

export const Empty = connect(mapStateToProps)(
  ({ store }) => ( 
    <section className="app__empty">
      <img src={Forbidden} alt="NoData" className="app__empty-image"/>
      <p className="text text--header text--center text--grey app__empty-text">
        { getTranslation(store.getState().language, 'empty') }
      </p>
    </section>
  )
) 