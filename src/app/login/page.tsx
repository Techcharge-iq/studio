import React from 'react'

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-md bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Sign in to HRMSpark</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-slate-600">Email</label>
            <input className="w-full px-3 py-2 border rounded-md mt-1" placeholder="you@company.com" />
          </div>

          <div>
            <label className="block text-sm text-slate-600">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-md mt-1" placeholder="••••••••" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-sm text-slate-600">Remember me</label>
            </div>

            <button className="text-sm text-indigo-600">Forgot password?</button>
          </div>

          <div>
            <button className="w-full py-2 bg-indigo-600 text-white rounded-md">Sign in</button>
          </div>

          <div className="text-center text-sm text-slate-500">Or continue as <strong>employee</strong> / <strong>hr</strong> / <strong>admin</strong></div>
        </form>
      </div>
    </div>
  )
}
