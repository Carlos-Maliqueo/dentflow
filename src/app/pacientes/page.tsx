'use client'

import { useState } from 'react'
import { patients } from '@/lib/data'
import Badge from '@/components/ui/Badge'
import PageHeader from '@/components/ui/PageHeader'
import { Search } from 'lucide-react'
import Link from 'next/link'


export default function PacientesPage() {
  const [search, setSearch] = useState('')

  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <PageHeader
        title="Pacientes"
        description={`${patients.length} pacientes registrados`}
      />

      {/* Buscador */}
      <div className="relative mb-6 max-w-sm">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar por nombre o email..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300"
        />
      </div>

      {/* Tabla */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-5 py-3 text-xs font-medium text-gray-500">Paciente</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-gray-500">Teléfono</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-gray-500">Última visita</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-gray-500">Estado</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-10 text-gray-400 text-sm">
                  No se encontraron pacientes
                </td>
              </tr>
            ) : (
              filtered.map(patient => (
                <tr key={patient.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xs font-medium text-blue-700">
                        {patient.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <Link href={`/pacientes/${patient.id}`} className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
                          {patient.name}
                        </Link>
                        <p className="text-xs text-gray-400">{patient.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-gray-600">{patient.phone}</td>
                  <td className="px-5 py-3 text-gray-600">{patient.lastVisit}</td>
                  <td className="px-5 py-3">
                    <Badge status={patient.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Footer con conteo */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Mostrando {filtered.length} de {patients.length} pacientes
          </p>
        </div>
      </div>
    </div>
  )
}