export const filters = [ 'id', 'name', 'company' ];
export const order = [ 'asc', 'desc' ];
export const layouts = [ 'table', 'grid' ];

export const l18n = [
  { 
    key: 'ru', 
    lang: 'Русский', 
    phrases: {
      logo     : 'Приложение таблицы',
      table    : 'Таблица',
      grid     : 'Карточки',
      id       : 'ID',
      name     : 'Имя',
      company  : 'Компания',
      asc      : 'По возрастанию',
      desc     : 'По убыванию',
      loadMore : 'Показать ещё'
    }
  },
  { 
    key: 'en', 
    lang: 'English', 
    phrases: {
      logo     : 'Table app',
      table    : 'Table',
      grid     : 'Grid',
      id       : 'ID',
      name     : 'Name',
      company  : 'Company',
      asc      : 'Ascending',
      desc     : 'Descending',
      loadMore : 'Load more'
    }
  }
];

const compareStrings = ( toCompareA, toCompareB ) => {
  return toCompareA.slice(0, toCompareA.indexOf(' ')).localeCompare(toCompareB);
}

export function sortBy( data, criteria, order = 'asc' ) {
  return data.sort( (a, b) => {
    if(order.trim().toLowerCase() === 'asc') {
      if(criteria === 'name' ) return compareStrings(a[criteria], b[criteria]);
      else if(criteria === 'company') return compareStrings(a[criteria].name, b[criteria].name);

      return a[criteria] - b[criteria];
    }
    else if(order.trim().toLowerCase() === 'desc') {
      if(criteria === 'name' ) return compareStrings(b[criteria], a[criteria]);
      else if(criteria === 'company') return compareStrings(b[criteria].name, a[criteria].name);

      return b[criteria] - a[criteria];
    }
    else throw new Error('incorrect type of order');
  });
}

export function getPhone( str ) {
  return str.slice(0, str.indexOf(' ')).split('.').join('-')
}

export function getTranslation( lang, str ) {
  const res = l18n.filter( l => l.key === lang )[0].phrases[str];

  if(!res) throw new Error('ERROR: String is undefined');
  return res;
}