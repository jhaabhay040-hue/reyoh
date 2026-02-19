import { useState } from 'react'
import { adminApprovals } from '../data/mockData'

export default function AdminDashboard() {
  const [approvals, setApprovals] = useState(adminApprovals)

  const toggleApproval = (index) => {
    setApprovals((prev) =>
      prev.map((item, idx) => (idx === index ? { ...item, approved: !item.approved } : item)),
    )
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl2 border border-slate-100 p-5 shadow-soft">
          <p className="text-sm text-slate-500">Total Students</p>
          <p className="text-3xl font-bold text-primary">128</p>
        </div>
        <div className="rounded-xl2 border border-slate-100 p-5 shadow-soft">
          <p className="text-sm text-slate-500">Total Tutors</p>
          <p className="text-3xl font-bold text-secondary">46</p>
        </div>
      </section>

      <section className="rounded-xl2 border border-slate-100 p-5 shadow-soft">
        <h2 className="mb-3 text-lg font-semibold">Approval Queue</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-2">Name</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">City</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {approvals.map((entry, index) => (
                <tr key={`${entry.name}-${entry.type}`} className="border-b border-slate-100">
                  <td className="py-2">{entry.name}</td>
                  <td className="py-2">{entry.type}</td>
                  <td className="py-2">{entry.city}</td>
                  <td className="py-2">
                    <button
                      type="button"
                      onClick={() => toggleApproval(index)}
                      className={`rounded-xl2 px-3 py-1 text-xs font-semibold text-white transition-transform duration-200 hover:scale-105 ${
                        entry.approved ? 'bg-accent' : 'bg-slate-400'
                      }`}
                    >
                      {entry.approved ? 'Approved' : 'Pending'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
