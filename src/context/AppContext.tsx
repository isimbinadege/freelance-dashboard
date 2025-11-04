import { createContext, type Dispatch } from "react";
import type { AppState, Action } from "../models/types";

// ----- 1. Context Type -----
export type AppContextType = {
  state: AppState;
  dispatch: Dispatch<Action>;
};

// ----- 2. Initial State -----
export const initialState: AppState = {
  clients: [],
  projects: [],
  payments: [],
};

// ----- 3. Reducer -----
export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "ADD_CLIENT":
      return { ...state, clients: [...state.clients, action.payload] };
    
    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };
    
    case "ADD_PAYMENT":
      return { ...state, payments: [...state.payments, action.payload] };
    
    case "MARK_PROJECT_PAID":
      return {
        ...state,
        projects: state.projects.map((p) =>
          p.id === action.payload.projectId
            ? { ...p, paymentStatus: "paid" as const }
            : p
        ),
      };
    
    case "UPDATE_PROJECT_STATUS":
      return {
        ...state,
        projects: state.projects.map((p) =>
          p.id === action.payload.projectId
            ? { ...p, status: action.payload.status }
            : p
        ),
      };
    
    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter((p) => p.id !== action.payload.projectId),
      };
    
    default:
      return state;
  }
}

// ----- 4. Create Context -----
export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => {},
});