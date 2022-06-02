import React,{createContext,useContext,useReducer} from "react";

// Prepares the data layer
export const StateContext=createContext();

// wrap our app and provide the data layer to every compnents of our app
export const StateProvider=({reducer,initialState,chidren})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {chidren}
    </StateContext.Provider>
);

// pull information from the data layer     
export const useStateValue = () => useContext(StateContext); 