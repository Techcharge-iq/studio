import React from 'react'
import KpiCard from '../components/KpiCard'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Overview</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Total Employees" value="128" color="bg-indigo-500" />
        <KpiCard title="Active" value="121" color="bg-green-500" />
        <KpiCard title="On Leave" value="6" color="bg-yellow-500" />
        <KpiCard title="New Hires (30d)" value="4" color="bg-pink-500" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white border rounded-md p-4">Visual charts placeholder (donut charts, trends)</div>
        <div className="bg-white border rounded-md p-4">Recent updates / announcements feed</div>
      </section>
    </div>
  )
}
