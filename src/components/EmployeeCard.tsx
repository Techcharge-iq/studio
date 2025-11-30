import React from 'react'

export default function EmployeeCard({ id, name, title, location }: { id: string; name: string; title: string; location: string }) {
  return (
    <div className="bg-white border rounded-md p-4 shadow-sm flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="font-semibold">{name}</div>
        <div className="text-xs text-slate-500">{id}</div>
      </div>

      <div className="text-sm text-slate-600">{title}</div>
      <div className="text-sm text-slate-500">Location: {location}</div>

      <div className="mt-2 flex items-center gap-2">
        <button className="text-sm px-2 py-1 rounded bg-indigo-600 text-white">View</button>
        <button className="text-sm px-2 py-1 rounded border text-slate-600">Edit</button>
        <button className="text-sm px-2 py-1 rounded border text-red-600">Delete</button>
      </div>
    </div>
  )
}
