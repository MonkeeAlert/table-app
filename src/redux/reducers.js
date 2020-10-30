export const rootReducer = ( state, { type, payload }) => {
  switch(type) {
    case 'GET_DATA':
      if(payload === undefined) return;
      
      return { 
        ...state, 
        data : [ ...payload ] 
      };

    case 'UPDATE_CURRENT':
      if(payload === undefined) return;  
    
      return { 
        ...state, 
        current : [ ...payload ] 
      };
    
    case 'SET_FILTER':
      if(payload === undefined) return;  
    
      return { 
        ...state, 
        filterBy : payload 
      };

    case 'SET_ORDER':
      if(payload === undefined) return;  
    
      return { 
        ...state, 
        orderBy : payload 
      };

    case 'SET_VIEW':
      if(payload === undefined) return;  
    
      return { 
        ...state, 
        view : payload 
      };
  
    case 'CHANGE_LANGUAGE':
      if(payload === undefined) return;  
    
      return { 
        ...state, 
        language : payload 
      };

    default: return { ...state };
  }
}