import { useContext } from "react";
import type { Project, Client } from "../models/types";
import { AppContext } from "../context/AppContext";

type ProjectListProps = {
  projects: Project[];
  clients: Client[];
};

export default function ProjectList({ projects, clients }: ProjectListProps) {
  const { dispatch } = useContext(AppContext); // Removed 'state' since you're not using it

  const markPaid = (projectId: string) => {
    dispatch({ type: "MARK_PROJECT_PAID", payload: { projectId } });
  };

  return (
    <div>
      {projects.map((project) => {
        const client = clients.find((c) => c.id === project.clientId);
        return (
          <div
            key={project.id}
            className="p-4 bg-card rounded-xl shadow mb-3 border-l-4 
              border-primary"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p>Client: {client?.name ?? "Client not found"}</p>
            <p>Status: {project.status}</p>
            <p className={`font-semibold ${project.paymentStatus === "paid" ? "text-success" : "text-danger"}`}>
              Payment: {project.paymentStatus}
            </p>
            {project.paymentStatus === "unpaid" && (
              <button
                onClick={() => markPaid(project.id)}
                className="mt-2 px-3 py-1 bg-primary text-white rounded hover:bg-secondary transition-colors"
              >
                Mark Paid
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}