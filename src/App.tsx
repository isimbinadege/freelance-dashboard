import ClientCard from "./components/ClientCard";
import ProjectList from "./components/ProjectList";
import { AppProvider } from "./context/AppContext";
import { clients, projects } from "./data/data";

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
        <h1 className="text-3xl font-bold text-primary mb-6">Freelance Dashboard</h1>

        {/* Clients Section */}
        <h2 className="text-2xl font-semibold mb-4">Clients</h2>
        <div>
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>

        {/* Projects Section */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Projects</h2>
        <ProjectList projects={projects} clients={clients} />
      </div>
    </AppProvider>
  );
}
