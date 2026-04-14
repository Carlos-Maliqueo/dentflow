type BadgeProps = {
  status: 'activo' | 'inactivo' | 'pendiente' | 'confirmada' | 'cancelada'
}

const styles = {
  activo:     'bg-green-50 text-green-700',
  confirmada: 'bg-green-50 text-green-700',
  pendiente:  'bg-yellow-50 text-yellow-700',
  inactivo:   'bg-gray-100 text-gray-500',
  cancelada:  'bg-red-50 text-red-600',
}

export default function Badge({ status }: BadgeProps) {
  return (
    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${styles[status]}`}>
      {status}
    </span>
  )
}