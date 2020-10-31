import React, { useRef } from 'react';
import { changeLanguage } from '../../redux/actions';
import { l18n } from '../../utils/functions';

export const LanguageSelect = ({ dispatch }) => {
  const select = useRef();
  const handleSelect = _ => dispatch( changeLanguage(select.current.children[select.current.selectedIndex].value) );

  return(
    <select 
      ref={select} 
      onChange={ handleSelect } 
      name="lanuage" 
      id="language" 
      className="header__language"
    >
      { 
        l18n.map( l => (
          <option key={l.key} value={l.key} className="header__language-option">{l.lang}</option>
        )) 
      }
    </select>
  )
}