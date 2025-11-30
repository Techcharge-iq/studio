"use client"
import React from 'react'
import EmployeeCard from '../../components/EmployeeCard'
import EmployeeDetailDrawer from '../../components/EmployeeDetailDrawer'

const sample = [
  { id: 'E001', name: 'Alice Johnson', title: 'Sales Manager', location: 'Office' },
  { id: 'E002', name: 'Bob Ahmed', title: 'Developer', location: 'Remote' },
  { id: 'E003', name: 'Chloe Tan', title: 'HR', location: 'Office' }
]

export default function EmployeesPage() {
  const [active, setActive] = React.useState<any | null>(null)
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Employees</h2>
        <div>
          <button className="px-3 py-1 rounded bg-indigo-600 text-white text-sm">Add Employee</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sample.map(s => (
          <div key={s.id}>
            <EmployeeCard id={s.id} name={s.name} title={s.title} location={s.location} />
            <div className="mt-2">
              <button className="text-sm px-3 py-1 rounded bg-slate-100 text-slate-700" onClick={() => setActive({ ...s, contact: 'alice@company.com', idNumber: 'P-12345', joinDate: '2023-05-01', lastAbsence: '2024-07-12', totalOt: 12 })}>Open</button>
            </div>
          </div>
        ))}
      </div>

      {active && <EmployeeDetailDrawer employee={active} onClose={() => setActive(null)} />}
    </div>
  )
}
