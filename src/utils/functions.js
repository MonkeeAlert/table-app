export const filters = [ 'id', 'userId', 'title', 'completed' ];
export const order = [ 'asc', 'desc' ];
export const layouts = [ 'table', 'grid' ];

export const l18n = [
  { 
    key: 'ru', 
    lang: 'Русский', 
    phrases: {
      logo      : 'Приложение таблицы',
      table     : 'Таблица',
      grid      : 'Карточки',
      id        : 'ID',
      title     : 'Заголовок',
      userId    : 'Номер пользователя',
      completed : 'Статус',
      done      : 'Сделано',
      notDone   : 'Не сделано',
      byDone    : 'По сделанным',
      byNotDone : 'По несделанным',
      asc       : 'По возрастанию',
      desc      : 'По убыванию',
      loadMore  : 'Показать ещё'
    }
  },
  { 
    key: 'en', 
    lang: 'English', 
    phrases: {
      logo      : 'Table app',
      table     : 'Table',
      grid      : 'Grid',
      id        : 'ID',
      title     : 'Title',
      userId    : 'User ID',
      completed : 'Status',
      done      : 'Done',
      notDone   : 'Not done',
      asc       : 'Ascending',
      byDone    : 'By done',
      byNotDone : 'By not done',
      desc      : 'Descending',
      loadMore  : 'Load more'
    }
  }
];

const compareStrings = ( toCompareA, toCompareB ) => {
  return toCompareA.slice(0, toCompareA.indexOf(' ')).localeCompare(toCompareB);
}

export function sortBy( data, criteria, order = 'asc' ) {
  return data.sort( (a, b) => {
    if(order.trim().toLowerCase() === 'asc') {
      if(criteria === 'title' ) return compareStrings(a[criteria], b[criteria]);
      return a[criteria] - b[criteria];
    }
    else if(order.trim().toLowerCase() === 'desc') {
      if(criteria === 'title' ) return compareStrings(b[criteria], a[criteria]);
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