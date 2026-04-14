'use client'

import { appointments, monthlyStats, patients } from '@/lib/data'
import KPICard from '@/components/ui/KPICard'
import PageHeader from '@/components/ui/PageHeader'
import Badge from '@/components/ui/Badge'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid
} from 'recharts'

export default function DashboardPage() {
  const activos   = patients.filter(p => p.status === 'activo').length
  const proximas  = appointments.filter(a => a.status === 'confirmada').length
  const pendientes = appointments.filter(a => a.status === 'pendiente').length

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Resumen general de la clínica"
      />

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KPICard title="Total pacientes"   value={patients.length} subtitle="registrados"     color="blue"   />
        <KPICard title="Pacientes activos" value={activos}         subtitle="este mes"         color="green"  />
        <KPICard title="Citas confirmadas" value={proximas}        subtitle="próximas"         color="purple" />
        <KPICard title="Citas pendientes"  value={pendientes}      subtitle="por confirmar"    color="yellow" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Gráfico */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h2 className="text-sm font-medium text-gray-700 mb-4">Actividad mensual</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyStats} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e5e7eb' }}
              />
              <Bar dataKey="pacientes" fill="#3b82f6" radius={[4,4,0,0]} name="Pacientes" />
              <Bar dataKey="citas"     fill="#a5b4fc" radius={[4,4,0,0]} name="Citas"     />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Próximas citas */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h2 className="text-sm font-medium text-gray-700 mb-4">Próximas citas</h2>
          <div className="space-y-3">
            {appointments.map(apt => (
              <div key={apt.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">{apt.patientName}</p>
                  <p className="text-xs text-gray-400">{apt.treatment} · {apt.time}</p>
                </div>
                <Badge status={apt.status} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}