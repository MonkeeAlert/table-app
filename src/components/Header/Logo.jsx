import React from 'react';
import { connect } from 'react-redux';
import { getTranslation } from '../../utils/functions';

const mapStateToProps = state => ({ language : state.language })

export const Logo = connect(mapStateToProps)(
  ({ store })  => ( 
    <a 
      href="/" 
      rel="noopener noreferrer" 
      className="text--link text--header text--graphite header__text--logo"
    >
      { getTranslation( store.getState().language, 'logo' ) }
    </a> 
  )
)