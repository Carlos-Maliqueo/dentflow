type KPICardProps = {
  title: string
  value: string | number
  subtitle: string
  color?: 'blue' | 'green' | 'yellow' | 'purple'
}

const colors = {
  blue:   'bg-blue-50 text-blue-700',
  green:  'bg-green-50 text-green-700',
  yellow: 'bg-yellow-50 text-yellow-700',
  purple: 'bg-purple-50 text-purple-700',
}

export default function KPICard({ title, value, subtitle, color = 'blue' }: KPICardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5">
      <p className="text-sm text-gray-500 mb-1">{title}</p>
      <p className="text-3xl font-semibold text-gray-900 mb-1">{value}</p>
      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colors[color]}`}>
        {subtitle}
      </span>
    </div>
  )
}