import { Patient, Appointment, Product } from '@/types'

export const patients: Patient[] = [
  { id: 1, name: 'María González', email: 'maria@gmail.com', phone: '+56 9 1234 5678', lastVisit: '2024-11-15', status: 'activo' },
  { id: 2, name: 'Carlos Rojas', email: 'carlos@gmail.com', phone: '+56 9 8765 4321', lastVisit: '2024-10-30', status: 'activo' },
  { id: 3, name: 'Ana Martínez', email: 'ana@gmail.com', phone: '+56 9 5555 1234', lastVisit: '2024-09-20', status: 'pendiente' },
  { id: 4, name: 'Luis Pérez', email: 'luis@gmail.com', phone: '+56 9 4444 5678', lastVisit: '2024-08-10', status: 'inactivo' },
  { id: 5, name: 'Sofía Torres', email: 'sofia@gmail.com', phone: '+56 9 3333 9999', lastVisit: '2024-11-20', status: 'activo' },
  { id: 6, name: 'Diego Vargas', email: 'diego@gmail.com', phone: '+56 9 2222 8888', lastVisit: '2024-11-01', status: 'activo' },
]

export const appointments: Appointment[] = [
  { id: 1, patientId: 1, patientName: 'María González', date: '2024-12-10', time: '09:00', treatment: 'Limpieza dental', status: 'confirmada' },
  { id: 2, patientId: 3, patientName: 'Ana Martínez', date: '2024-12-10', time: '10:30', treatment: 'Ortodoncia', status: 'pendiente' },
  { id: 3, patientId: 2, patientName: 'Carlos Rojas', date: '2024-12-11', time: '11:00', treatment: 'Extracción', status: 'confirmada' },
  { id: 4, patientId: 5, patientName: 'Sofía Torres', date: '2024-12-12', time: '09:30', treatment: 'Blanqueamiento', status: 'pendiente' },
  { id: 5, patientId: 6, patientName: 'Diego Vargas', date: '2024-12-12', time: '15:00', treatment: 'Revisión general', status: 'confirmada' },
]

export const products: Product[] = [
  { id: 1, name: 'Brackets metálicos', category: 'Ortodoncia', price: 45000, stock: 120, sku: 'ORT-001' },
  { id: 2, name: 'Anestesia local 2%', category: 'Anestesia', price: 8500, stock: 48, sku: 'ANE-001' },
  { id: 3, name: 'Composite A2', category: 'Resinas', price: 32000, stock: 15, sku: 'RES-002' },
  { id: 4, name: 'Hilo dental profesional', category: 'Higiene', price: 3200, stock: 200, sku: 'HIG-003' },
  { id: 5, name: 'Fresas de diamante', category: 'Instrumental', price: 18000, stock: 8, sku: 'INS-004' },
  { id: 6, name: 'Guantes de nitrilo M', category: 'Protección', price: 12000, stock: 300, sku: 'PRO-001' },
]

export const monthlyStats = [
  { month: 'Jul', pacientes: 38, citas: 52 },
  { month: 'Ago', pacientes: 42, citas: 61 },
  { month: 'Sep', pacientes: 35, citas: 48 },
  { month: 'Oct', pacientes: 51, citas: 74 },
  { month: 'Nov', pacientes: 47, citas: 68 },
  { month: 'Dic', pacientes: 29, citas: 41 },
]

export function getPatientById(id: number) {
  return patients.find(p => p.id === id) ?? null
}

export function getAppointmentsByPatient(patientId: number) {
  return appointments.filter(a => a.patientId === patientId)
}