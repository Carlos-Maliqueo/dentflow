export type Patient = {
  id: number
  name: string
  email: string
  phone: string
  lastVisit: string
  status: 'activo' | 'inactivo' | 'pendiente'
}

export type Appointment = {
  id: number
  patientId: number
  patientName: string
  date: string
  time: string
  treatment: string
  status: 'confirmada' | 'pendiente' | 'cancelada'
}

export type Product = {
  id: number
  name: string
  category: string
  price: number
  stock: number
  sku: string
}