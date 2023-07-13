import { createContext, useReducer } from "react";

export const Context=createContext();

export const ContextProvider=({children})=>
{
    const Reducer=(state,{type,payload})=>
    {
        switch(type)
        {
            case "":
                return {...state};

            default:
                return state;    
        }
    }
    const initialState={

    }
    const [state,dispatch]=useReducer(Reducer,initialState);

    return (
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>
    )
}