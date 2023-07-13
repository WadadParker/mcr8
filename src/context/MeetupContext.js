import { createContext, useReducer } from "react";

import {data} from "../backend/db/data";

export const MeetupContext=createContext();

export const MeetupProvider=({children})=>
{
    const Reducer=(state,{type,payload,inputField})=>
    {
        const clearInput={name:""};
        switch(type) 
        {
            case "INPUT_FIELDS":
                return {...state,input:{...state.input,[inputField]:payload}};
               
            case "TOGGLE_MODAL":
                return {...state,showModal:payload};    
               
            case "ADD":
                return {...state,list:[...state.list,state.input],input:clearInput,showModal:false};  
             
            case "CLEAR_INPUT":
                return {...state,input:clearInput,showModal:false};    
              
            case "SEARCH":
                return {...state,search:payload};
               
            case "SORT":
                return {...state,sort:payload};    

            default:
                return state;    
        }
    }
    const initialState= {
        input:{name:"",email:""},
        showModal:false,
        meetups:data.meetups,
        search:"",
        sort:"both",
    }
    const [state,dispatch]=useReducer(Reducer,initialState);


    return (
        <MeetupContext.Provider value={{state,dispatch}}>
            {children}
        </MeetupContext.Provider>
    )
}