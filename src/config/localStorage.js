export const loadState =  () => {
  try {
      const localState = localStorage.getItem('state');
      if (localState === null) {
         return undefined; 
      }
      let serializeState = JSON.parse(localState); 
      return serializeState
  }  catch (err) {
     return undefined; 
  }  
}; 

export const saveState = (state) => {
    try{
        const serializeState = JSON.stringify(state);
        localStorage.setItem('state', serializeState);
    } catch (err) {
        //ignore error
    }
}