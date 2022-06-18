import React, {FC,  useReducer,Dispatch} from "react";
import { BoundActions, Actions} from '../types/index';


export default (reducer : any, actions:Actions, initialState ) => {
  const Context = React.createContext(initialState);

  const Provider : FC<React.ReactNode> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const boundActions: BoundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
      
    }

    return <Context.Provider value={{state, ...boundActions}}>{children}</Context.Provider>
  }

  return {Context,Provider};
}