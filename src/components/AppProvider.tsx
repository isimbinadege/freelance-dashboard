import { useReducer, type ReactNode } from "react";
import { AppContext, initialState, reducer } from "../context/AppContext";

// ----- Provider Component -----
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}