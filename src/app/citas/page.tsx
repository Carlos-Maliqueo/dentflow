'use client'

import { useState } from 'react'
import { appointments } from '@/lib/data'
import Badge from '@/components/ui/Badge'
import PageHeader from '@/components/ui/PageHeader'

const FILTROS = ['todas', 'confirmada', 'pendiente', 'cancelada'] as const
type Filtro = typeof FILTROS[number]

export default function CitasPage() {
  const [filtro, setFiltro] = useState<Filtro>('todas')

  const filtered = appointments.filter(a =>
    filtro === 'todas' ? true : a.status === filtro
  )

  return (
    <div>
      <PageHeader
        title="Citas"
        description={`${appointments.length} citas agendadas`}
      />

      {/* Filtros */}
      <div className="flex gap-2 mb-6">
        {FILTROS.map(f => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors capitalize ${
              filtro === f
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Lista de citas */}
      <div className="space-y-3">
        {filtered.map(apt => (
          <div key={apt.id} className="bg-white rounded-xl border border-gray-100 px-5 py-4 flex items-center justify-between">
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
                <p className="font-medium text-gray-900">{apt.patientName}</p>
                <p className="text-xs text-gray-400 mt-0.5">{apt.treatment} · {apt.time}</p>
              </div>
            </div>
            <Badge status={apt.status} />
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm">
            No hay citas con ese estado
          </div>
        )}
      </div>
    </div>
  )
}