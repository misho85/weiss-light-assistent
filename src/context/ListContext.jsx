import React, { createContext, useContext, useReducer } from 'react';
import { usePersistedContext, usePersistedReducer } from '../utils/usePersist';

const initialState = {
  items: [
    {
      id: Date.now(),
      label: 'Novi Objekat',
      kvadratura: 500,
      visina: 10,
      lux: 350,
      zidovi: false,
      podovi: true,
    },
  ],
  selected: {
    id: Date.now(),
    label: 'Novi Objekat',
    kvadratura: 500,
    visina: 10,
    lux: 350,
    zidovi: false,
    podovi: true,
  },
};

export const ListContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // return current state if empty
      if (!action.payload) {
        return state;
      }
      // return current state if duplicate
      if (state.items.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(t => t.id !== action.payload.id),
      };
    case 'SELECT_ITEM':
      return {
        ...state,
        selected: {
          ...action.payload,
          lumen: action.payload.kvadratura * action.payload.lux,
        },
      };
    case 'EDIT_ITEM':
      const itemReplacer = (array, oldItem, newItem) =>
        array.map(item => (item.id === oldItem.id ? newItem : item));

      return {
        ...state,
        items: itemReplacer(state.items, state.selected, action.payload),
      };
    default:
      return state;
  }
};

export const ListProvider = ({ children }) => {
  // create a global store to store the state
  const globalStore = usePersistedContext(
    useContext(ListContext),
    'object_types'
  );

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    'object_types' // The localStorage key
  );

  return (
    <ListContext.Provider value={{ state, dispatch }}>
      {children}
    </ListContext.Provider>
  );
};
