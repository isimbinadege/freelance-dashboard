import { createContext, useReducer, type ReactNode } from "react";

// ----- 1. State Type -----
type AppState = {
  count: number;
};

// ----- 2. Actions -----
type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

// ----- 3. Context Type -----
type AppContextType = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};

// ----- 4. Initial State -----
const initialState: AppState = {
  count: 0,
};

// ----- 5. Reducer -----
function reducer(state: AppState, action: Action): AppState {
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

// ----- 7. Provider Component -----
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
