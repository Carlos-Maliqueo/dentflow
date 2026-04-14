'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, Calendar, Package } from 'lucide-react'

const links = [
  { href: '/',           label: 'Dashboard',  icon: LayoutDashboard },
  { href: '/pacientes',  label: 'Pacientes',  icon: Users },
  { href: '/citas',      label: 'Citas',      icon: Calendar },
  { href: '/productos',  label: 'Productos',  icon: Package },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-56 min-h-screen bg-white border-r border-gray-100 flex flex-col">
      <div className="px-6 py-5 border-b border-gray-100">
        <span className="text-lg font-semibold text-gray-900">DentFlow</span>
        <p className="text-xs text-gray-400 mt-0.5">CRM Dental</p>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                active
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon size={16} />
              {label}
            </Link>
          )
        })}
      </nav>
      <div className="px-6 py-4 border-t border-gray-100">
        <p className="text-xs text-gray-400">ExpressDent © 2024</p>
      </div>
    </aside>
  )
}