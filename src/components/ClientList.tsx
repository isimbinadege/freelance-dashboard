import type { Client } from "../models/types";
import ClientCard from "./ClientCard";

type ClientListProps = {
  clients: Client[];
};

export default function ClientList({ clients }: ClientListProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Clients</h2>

      {clients.length === 0 && (
        <p className="text-gray-500 italic">No clients added yet.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {clients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
}
