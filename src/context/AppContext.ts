import { createContext, useReducer } from "react";
import type { ReactNode } from "react";

type AppState = {
  count: number;
};

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

export type AppContextType = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};

const initialState: AppState = {
  count: 0,
};

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

export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
