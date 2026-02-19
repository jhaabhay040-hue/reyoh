import { sessionHistory, upcomingSessions } from '../data/mockData'

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Student Dashboard</h1>

      <section className="rounded-xl2 border border-slate-100 p-5 shadow-soft">
        <h2 className="mb-4 text-lg font-semibold">Upcoming Sessions</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {upcomingSessions.map((session) => (
            <div
              key={`${session.subject}-${session.time}`}
              className="rounded-xl2 bg-slate-50 p-4 transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="font-semibold text-primary">{session.subject}</p>
              <p className="text-sm text-slate-600">Tutor: {session.tutor}</p>
              <p className="text-sm text-slate-600">{session.time}</p>
              <p className="mt-1 inline-block rounded-full bg-indigo-100 px-2 py-1 text-xs text-primary">
                {session.mode}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl2 border border-slate-100 p-5 shadow-soft">
          <h2 className="mb-3 text-lg font-semibold">Profile</h2>
          <p className="text-sm text-slate-600">Name: Rahul Kapoor</p>
          <p className="text-sm text-slate-600">Grade: 9</p>
          <p className="text-sm text-slate-600">City: Mumbai</p>
          <p className="text-sm text-slate-600">Preferred Mode: Online + Home</p>
        </div>

        <div className="rounded-xl2 border border-slate-100 p-5 shadow-soft">
          <h2 className="mb-3 text-lg font-semibold">Session History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="pb-2">Date</th>
                  <th className="pb-2">Subject</th>
                  <th className="pb-2">Tutor</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {sessionHistory.map((item) => (
                  <tr key={`${item.date}-${item.subject}`} className="border-b border-slate-100">
                    <td className="py-2">{item.date}</td>
                    <td className="py-2">{item.subject}</td>
                    <td className="py-2">{item.tutor}</td>
                    <td className="py-2 text-accent">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
