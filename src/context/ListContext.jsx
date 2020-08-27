import React, { createContext, useContext, useReducer } from 'react';
import { usePersistedContext, usePersistedReducer } from '../utils/usePersist';

const initialState = {
  items: [
    {
      id: Date.now(),
      label: 'Soba',
      kvadratura: 50,
      visina: 10,
      lux: 20,
      zidovi: false,
      podovi: true,
    },
    {
      id: Date.now() + 1,
      label: 'Kupatilo',
      kvadratura: 30,
      visina: 5,
      lux: 30,
      zidovi: true,
      podovi: true,
    },
  ],
  selected: {
    id: Date.now(),
    label: 'Soba',
    kvadratura: 50,
    visina: 10,
    lux: 50,
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
        items: state.items.filter(t => t !== action.payload),
      };
    case 'SELECT_ITEM':
      return {
        ...state,
        selected: action.payload,
      };
    case 'EDIT_ITEM':
      const itemReplacer = (array, oldItem, newItem) =>
        array.map(item => (item === oldItem ? newItem : item));

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
