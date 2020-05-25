import React from "react";
import { IAction , InitState } from './interfaces'


const INITIAL_STATE: InitState = {
  episodes: [],
  favourites: [],
};

export const Store = React.createContext<InitState | any>(INITIAL_STATE);

function reducer(state: InitState, action: IAction) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
      return { ...state, favourites: [...state.favourites, action.payload] };
    case "REMOVE":
      return { ...state, favourites: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
