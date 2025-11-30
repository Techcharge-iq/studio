import React from 'react'

const KpiCard = ({ title, value, color = 'bg-indigo-500' }: { title: string; value: string | number; color?: string }) => {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${color}`}>{String(value)[0]}</div>
      <div>
        <div className="text-sm text-slate-500">{title}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  )
}

export default KpiCard
