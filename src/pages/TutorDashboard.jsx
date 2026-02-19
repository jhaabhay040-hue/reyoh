import { useState } from 'react'
import { tutorStudents } from '../data/mockData'

export default function TutorDashboard() {
  const [available, setAvailable] = useState(true)

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Tutor Dashboard</h1>

      <section className="rounded-xl2 border border-slate-100 p-5 shadow-soft">
        <p className="text-sm text-slate-500">This Month Earnings</p>
        <p className="mt-1 text-3xl font-bold text-primary">₹ 28,500</p>
      </section>

      <section className="rounded-xl2 border border-slate-100 p-5 shadow-soft">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Availability</h2>
          <button
            type="button"
            onClick={() => setAvailable((prev) => !prev)}
            className={`rounded-xl2 px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 ${
              available ? 'bg-accent' : 'bg-slate-400'
            }`}
          >
            {available ? 'Available' : 'Unavailable'}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-2">Student</th>
                <th className="pb-2">Grade</th>
                <th className="pb-2">Subject</th>
              </tr>
            </thead>
            <tbody>
              {tutorStudents.map((student) => (
                <tr key={student.name} className="border-b border-slate-100">
                  <td className="py-2">{student.name}</td>
                  <td className="py-2">{student.grade}</td>
                  <td className="py-2">{student.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
