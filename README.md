# DentFlow — CRM Dental Dashboard

Dashboard de gestión para clínicas dentales construido con Next.js 14, TypeScript y Tailwind CSS.

**Demo en vivo:** [dentflow-two.vercel.app](https://dentflow-two.vercel.app)

## Funcionalidades

- Dashboard con KPIs, gráfico de actividad mensual y próximas citas
- Gestión de pacientes con búsqueda en tiempo real
- Detalle de paciente con historial de citas
- Agenda de citas con filtros por estado
- Catálogo de productos dentales con alerta de stock bajo

## Stack

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Gráficos:** Recharts
- **Iconos:** Lucide React
- **Deploy:** Vercel

## Correr localmente

```bash
git clone https://github.com/TU_USUARIO/dentflow
cd dentflow
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Estructura

```
src/
├── app/              # Páginas (App Router)
│   ├── page.tsx      # Dashboard
│   ├── pacientes/    # Lista y detalle de pacientes
│   ├── citas/        # Agenda con filtros
│   └── productos/    # Catálogo dental
├── components/       # Componentes reutilizables
├── lib/              # Datos y helpers
└── types/            # Tipos TypeScript
```
