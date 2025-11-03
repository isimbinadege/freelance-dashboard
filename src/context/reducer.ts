import type { Client, Project, Payment } from "../models/types";
import { clients, projects, payments } from "../data/data";

// Define global app state
export type AppState = {
  clients: Client[];
  projects: Project[];
  payments: Payment[];
};

// Initial state
export const initialState: AppState = {
  clients,
  projects,
  payments,
};

// Actions (Discriminated Union)
export type Action =
  | { type: "MARK_PROJECT_PAID"; payload: { projectId: string } }
  | { type: "ADD_PAYMENT"; payload: Payment };

// Reducer function
export const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "MARK_PROJECT_PAID":
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.projectId
            ? { ...project, paymentStatus: "paid" }
            : project
        ),
      };

    case "ADD_PAYMENT":
      return {
        ...state,
        payments: [...state.payments, action.payload],
      };

    default:
      return state;
  }
};
