import React from 'react'

export default function AttendancePage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Attendance</h2>
        <div className="text-sm text-slate-500">Monthly report / filters</div>
      </div>

      <div className="bg-white border rounded-md p-4 shadow-sm">
        <div className="text-sm text-slate-600 mb-2">Monthly attendance grid placeholder</div>
        <div className="w-full h-64 border-2 border-dashed border-slate-100 flex items-center justify-center text-sm text-slate-400">Attendance grid</div>
      </div>
    </div>
  )
}
