import React from 'react';
import { useStore, useDispatch } from 'react-redux';

import { Logo } from './Logo';
import { LanguageSelect } from './LanguageSelect';
import { Filters } from './Filters';
import { View } from './View';

const Header = _ => {
  const store = useStore();
  const dispatch = useDispatch();

  return(
    <header className="app__header">
      <div className="header__row">
        <Logo store={store} />
        <LanguageSelect dispatch={dispatch} />
      </div>
      <div className="header__row header__row--filters">
        <Filters store={store} dispatch={dispatch} />
        <View store={store} dispatch={dispatch} />
      </div>
    </header>
  )
}

export default Header;