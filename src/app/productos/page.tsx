'use client'

import { useState } from 'react'
import { products } from '@/lib/data'
import PageHeader from '@/components/ui/PageHeader'
import { Search } from 'lucide-react'

export default function ProductosPage() {
  const [search, setSearch] = useState('')

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <PageHeader
        title="Productos"
        description={`${products.length} productos en catálogo`}
      />

      {/* Buscador */}
      <div className="relative mb-6 max-w-sm">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar por nombre o categoría..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300"
        />
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map(product => (
          <div key={product.id} className="bg-white rounded-xl border border-gray-100 p-5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-medium text-gray-900">{product.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{product.sku}</p>
              </div>
              <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium">
                {product.category}
              </span>
            </div>
            <div className="flex justify-between items-end mt-4">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Stock</p>
                <p className={`text-sm font-medium ${product.stock < 10 ? 'text-red-600' : 'text-gray-700'}`}>
                  {product.stock} unidades {product.stock < 10 && '⚠ bajo'}
                </p>
              </div>
              <p className="text-lg font-semibold text-gray-900">
                ${product.price.toLocaleString('es-CL')}
              </p>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-3 text-center py-12 text-gray-400 text-sm">
            No se encontraron productos
          </div>
        )}
      </div>
    </div>
  )
}