export const ADD_NUMBER = 'add_number';
export const SUBTRACT_NUMBER ="substarct_number";


export const addAction = ()=>({
    type: ADD_NUMBER,
    payload:1
  
  })
  
export const subtractAction = ()=>({
    type:SUBTRACT_NUMBER,
    payload:2
  })