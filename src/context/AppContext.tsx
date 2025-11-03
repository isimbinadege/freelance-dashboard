import { createContext, type Dispatch } from "react";

// ----- 1. State Type -----
export type AppState = {
  count: number;
};

// ----- 2. Actions -----
export type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

// ----- 3. Context Type -----
export type AppContextType = {
  state: AppState;
  dispatch: Dispatch<Action>;
};

// ----- 4. Initial State -----
export const initialState: AppState = {
  count: 0,
};

// ----- 5. Reducer -----
export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// ----- 6. Create Context -----
export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => {},
});