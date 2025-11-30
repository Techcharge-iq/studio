"use client"
import React from 'react'

export default function EmployeeDetailDrawer({ employee, onClose }: { employee?: any; onClose?: () => void }) {
  if (!employee) return null

  return (
    <aside className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white border-l shadow-lg p-6 overflow-auto">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-lg font-bold">{employee.name}</div>
          <div className="text-sm text-slate-500">{employee.title}</div>
        </div>
        <div>
          <button className="px-3 py-1 text-sm border rounded" onClick={onClose}>Close</button>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="text-sm text-slate-600">Contact: {employee.contact ?? '—'}</div>
        <div className="text-sm text-slate-600">Branch: {employee.branch ?? '—'}</div>
        <div className="text-sm text-slate-600">Passport/ID: {employee.idNumber ?? '—'}</div>

        <hr className="my-3" />
        <div className="text-sm text-slate-700 font-semibold">History</div>
        <div className="text-xs text-slate-500">Joining: {employee.joinDate ?? '—'}</div>
        <div className="text-xs text-slate-500">Last Absence: {employee.lastAbsence ?? '—'}</div>
        <div className="text-xs text-slate-500">OT Hours: {employee.totalOt ?? 0}</div>
      </div>
    </aside>
  )
}
