import React from 'react'

export default function DonutChart({ title, value }: { title: string; value?: string }) {
  return (
    <div className="bg-white border rounded-md p-4 shadow-sm flex flex-col items-center justify-center">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="text-2xl font-semibold mt-2">{value ?? '—'}</div>
      <div className="mt-3 w-32 h-32 rounded-full border-4 border-dashed border-slate-200 flex items-center justify-center text-sm text-slate-400">Donut</div>
    </div>
  )
}
