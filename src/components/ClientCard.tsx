import type { Client } from "../models/types";

type ClientCardProps = {
  client: Client;
};

export default function ClientCard({ client }: ClientCardProps) {
  return (
    <div className="p-4 bg-card rounded-2xl shadow-lg mb-4 border-l-4 border-primary hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-primary mb-1">{client.name}</h2>
      <p className="text-gray-600">Country: {client.country}</p>
      <p className="text-gray-500 italic">{client.email ?? "Email not provided"}</p>
    </div>
  );
}
