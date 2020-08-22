import React, { createContext, useContext, useReducer } from "react";

// preparing the data layer
export const StateContext = createContext();

// initialState = data layer when app is loaded
// reducer listens for changes to the datalayer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// hook which allows us to pull data from the datalayer
export const useStateValue = () => useContext(StateContext);
