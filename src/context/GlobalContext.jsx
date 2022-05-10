import React , { useState ,createContext ,useReducer, Children } from "react";


export const GlobalContext = createContext()

const reducerFn = (state ,action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, action.payload]

        case 'DELETE_BOOK':
           return state.filter((expense) => {
              return expense.id !== action.payload
           })            
    
        default:
            state;
    }
}

const GlobalContextProvider = (props) => {
    const [expenses, dispatch] = useReducer( reducerFn , [
        { id: 1, text: 'Flower', amount: -10 },
        { id: 2, text: 'Salary', amount: 900 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ])
    return ( 
        <GlobalContext.Provider value={{expenses , dispatch}}>
         {props.children}
        </GlobalContext.Provider>

     );
}
 
export default GlobalContextProvider;