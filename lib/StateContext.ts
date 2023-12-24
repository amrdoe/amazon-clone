import { Dispatch, ReducerState, createContext, useContext } from "react";

interface AddToBasketAction {
  type: 'ADD_TO_BASKET'
  item: Item
}

interface RemoveFromBasketAction {
  type: 'REMOVE_FROM_BASKET'
  id: string
}

export interface Item {
  id: string,
  title: string,
  image: string,
  price: number,
  rating: number
}

export type Action = AddToBasketAction | RemoveFromBasketAction;

export const initialState = {
  cart: [] as Item[]
}

export const reducer = (state: typeof initialState, action: Action): typeof initialState => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        cart: [...state.cart, action.item]
      }
    case 'REMOVE_FROM_BASKET':
      const index = state.cart.findIndex(item => item.id === action.id);
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as it's not in the basket!`);
      }
      return {
        ...state,
        cart: newCart
      }
    default:
      return state;
  }
}

const StateContext = createContext<[ReducerState<typeof reducer>, Dispatch<Action>]>([initialState, () => { }]);
export const useStateValue = () => useContext(StateContext);

export default StateContext;