import { createContext, useContext, useReducer } from 'react';
import { initialState, ProductReducer } from '../Reducer';

const Context = createContext();

  export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  return (
     <Context.Provider 
      value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
export const usecontext =() => useContext(Context)
