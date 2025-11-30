import './globals.css'
import React from 'react'

export const metadata = {
  title: 'HRMSpark — Dashboard',
  description: 'Human Resource Management System — Starter scaffold'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white border-b">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
              <div className="text-xl font-bold">HRMSpark</div>
              <nav className="space-x-4 text-sm text-slate-600">
                <a href="/" className="hover:text-slate-900">Dashboard</a>
                <a href="/employees" className="hover:text-slate-900">Employees</a>
                <a href="/attendance" className="hover:text-slate-900">Attendance</a>
                <a href="/payroll" className="hover:text-slate-900">Payroll</a>
                <a href="/documents" className="hover:text-slate-900">Documents</a>
                <a href="/settings" className="hover:text-slate-900">Settings</a>
              </nav>
            </div>
          </header>

          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>

          <footer className="border-t bg-white py-4 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} HRMSpark — for demo and scaffold purposes
          </footer>
        </div>
      </body>
    </html>
  )
}
