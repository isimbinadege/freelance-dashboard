import { createContext, useReducer, type ReactNode } from "react";
import { appReducer, initialState, type Action, type AppState } from "./reducer";

type AppContextType = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};

// Create the Context (default value)
export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => {},
});

// Provider Component (wraps the entire app)
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
