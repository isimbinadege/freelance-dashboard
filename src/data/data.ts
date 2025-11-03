import type { Client, Project, Payment } from "../models/types";



// Clients
export const clients: Client[] = [
  {
    id: "c1",
    name: "John Smith",
    country: "USA",
    email: "johnsmith@example.com",
  },
  {
    id: "c2",
    name: "daniella",
    country: "Rwanda",
  },
];

// Projects
export const projects: Project[] = [
  {
    id: "p1",
    clientId: "c1",
    title: "Website Redesign",
    budget: 500,
    status: "in-progress",
    paymentStatus: "unpaid",
  },
  {
    id: "p2",
    clientId: "c2",
    title: "Mobile App UI",
    budget: 800,
    status: "completed",
    paymentStatus: "paid",
  },
];

// Payments
export const payments: Payment[] = [
  {
    projectId: "p2",
    amount: 800,
    date: "2025-01-01",
  },
];
