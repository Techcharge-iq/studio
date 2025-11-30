import React from 'react'
const { generatePaySlip } = require('../../lib/salary')

export default function PayrollPage() {
  // Example usage with demo data on the server
  const example = generatePaySlip({ monthlyGross: 3000, basicSalary: 1500, absentDays: 1, halfDays: 0, approvedOtHours: 6, outstandingBalance: 50 })

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Payroll / Pay Slip Generator</h2>
        <div className="text-sm text-slate-500">Auto-calculate monthly payslip</div>
      </div>

      <div className="bg-white border rounded-md p-6">
        <div className="text-sm text-slate-500 mb-4">Example pay slip (server-side):</div>
        <pre className="bg-slate-50 p-3 rounded text-xs text-slate-700 overflow-auto">{JSON.stringify(example, null, 2)}</pre>
      </div>
    </div>
  )
}
