import React, { createContext } from "react";
import { useReducer } from "react";
export const Cartcontext = createContext();
const ContextApi = (props) => {
  const contextReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const tempState = state.filter((data) => action.payload.id === data.id);
        if (tempState.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "INCREASE":
        const tempStates = state.map((data) => {
          if (data.id === action.payload.id) {
            return { ...data, quantity: data.quantity + 1 };
          } else {
            return data;
          }
        });
        return tempStates;

      case "DECREASE":
        const tempStates1 = state.map((data) => {
          if (data.id === action.payload.id) {
            return { ...data, quantity: data.quantity - 1 };
          } else {
            return data;
          }
        });
        return tempStates1;
      case "REMOVE":
        const tempStates2 = state.filter(
          (data) => data.id !== action.payload.id
        );
        return tempStates2;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(contextReducer, []);
  const Info = { state, dispatch };
  return (
    <Cartcontext.Provider value={Info}>{props.children}</Cartcontext.Provider>
  );
};

export default ContextApi;
