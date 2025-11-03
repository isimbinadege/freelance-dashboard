// src/models/types.ts

export interface Client {
  id: string;
  name: string;
  country: string;
  email?: string; // optional property
}

export type ProjectStatus = 'pending' | 'in-progress' | 'completed';
export type PaymentStatus = 'paid' | 'unpaid';

export interface Project {
  id: string;
  clientId: string; // link to Client.id
  title: string;
  budget: number;
  status: ProjectStatus;
  paymentStatus: PaymentStatus;
}

export interface Payment {
  projectId: string;
  amount: number;
  date: string; // ISO format date
}

export interface AppState {
  clients: Client[];
  projects: Project[];
  payments: Payment[];
}

// Actions as a discriminated union for useReducer
export type Action =
  | { type: 'ADD_CLIENT'; payload: Client }
  | { type: 'ADD_PROJECT'; payload: Project }
  | { type: 'ADD_PAYMENT'; payload: Payment }
  | { type: 'MARK_PROJECT_PAID'; payload: { projectId: string } }
  | { type: 'UPDATE_PROJECT_STATUS'; payload: { projectId: string; status: ProjectStatus } }
  | { type: 'DELETE_PROJECT'; payload: { projectId: string } };
