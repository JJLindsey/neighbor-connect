import raw from '../clientContent/client.json'

// Normalize: support 1 or many clients
export const clients = Array.isArray(raw) ? raw : [raw]

export const getClientById = (id: string) =>
  clients.find(c => c.id === id)

export const getCategories = () =>
  [...new Set(clients.map(c => c.categoryLabel))]