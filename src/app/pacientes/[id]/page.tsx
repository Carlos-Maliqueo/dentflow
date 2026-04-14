import { getPatientById, getAppointmentsByPatient } from '@/lib/data'
import Badge from '@/components/ui/Badge'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, Calendar } from 'lucide-react'

type Props = {
  params: Promise<{ id: string }>
}

export default async function PatientDetailPage({ params }: Props) {
  const { id } = await params
  const patient = getPatientById(Number(id))

  if (!patient) notFound()

  const appointments = getAppointmentsByPatient(patient.id)

  return (
    <div>

      {/* Volver */}
      <Link
        href="/pacientes"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-6 transition-colors"
      >
        <ArrowLeft size={14} />
        Volver a pacientes
      </Link>

      {/* Header del paciente */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-lg font-semibold text-blue-700">
            {patient.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">{patient.name}</h1>
            <p className="text-sm text-gray-400 mt-0.5">Paciente #{patient.id}</p>
          </div>
          <div className="ml-auto">
            <Badge status={patient.status} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
            <Mail size={15} className="text-gray-400" />
            <div>
              <p className="text-xs text-gray-400">Email</p>
              <p className="text-sm text-gray-700">{patient.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
            <Phone size={15} className="text-gray-400" />
            <div>
              <p className="text-xs text-gray-400">Teléfono</p>
              <p className="text-sm text-gray-700">{patient.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
            <Calendar size={15} className="text-gray-400" />
            <div>
              <p className="text-xs text-gray-400">Última visita</p>
              <p className="text-sm text-gray-700">{patient.lastVisit}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Historial de citas */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-sm font-medium text-gray-700 mb-4">
          Historial de citas
          <span className="ml-2 text-xs text-gray-400 font-normal">
            {appointments.length} registradas
          </span>
        </h2>

        {appointments.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-8">
            Sin citas registradas
          </p>
        ) : (
          <div className="space-y-3">
            {appointments.map(apt => (
              <div
                key={apt.id}
                className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
              >
                <div className="flex items-center gap-4">
                  <div className="text-center bg-blue-50 rounded-lg px-3 py-2 min-w-[52px]">
                    <p className="text-xs text-blue-400 font-medium">
                      {new Date(apt.date).toLocaleString('es-CL', { month: 'short' }).toUpperCase()}
                    </p>
                    <p className="text-lg font-semibold text-blue-700 leading-none">
                      {new Date(apt.date).getDate() + 1}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{apt.treatment}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{apt.time}</p>
                  </div>
                </div>
                <Badge status={apt.status} />
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}