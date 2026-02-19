import { Link } from 'react-router-dom'
import Button from '../components/Button'
import brainMascot from '../assets/brain-mascot.png'
import { howItWorks, teamMembers } from '../data/mockData'

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="grid gap-8 rounded-xl2 bg-slate-50 p-8 shadow-soft md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            Trusted Home & Online Tutors Near You
          </h1>
          <p className="text-slate-600">
            REOYH helps students and parents discover verified tutors for safe, focused, and
            trackable learning support.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/student-register">
              <Button>Find Tutor</Button>
            </Link>
            <Link to="/tutor-apply">
              <Button variant="secondary">Become Tutor</Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={brainMascot} alt="Brain mascot" className="h-auto w-full max-w-sm" />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {howItWorks.map((step) => (
            <article
              key={step.title}
              className="rounded-xl2 border border-slate-100 p-5 shadow-soft transition-transform duration-200 hover:-translate-y-1"
            >
              <h3 className="mb-2 text-lg font-semibold text-primary">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-xl2 border border-slate-100 p-6 shadow-soft md:grid-cols-2">
        <div>
          <h2 className="mb-2 text-2xl font-semibold">Problem</h2>
          <p className="text-slate-600">
            Families struggle to find trustworthy tutors quickly, while good tutors find it hard to
            get consistent students.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-2xl font-semibold">Solution</h2>
          <p className="text-slate-600">
            REOYH bridges both sides with a simple marketplace that highlights verified profiles,
            clear communication, and learning progress visibility.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-xl2 border border-slate-100 p-5 text-center shadow-soft transition-transform duration-200 hover:-translate-y-1"
            >
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto mb-3 h-24 w-24 rounded-full object-cover"
              />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-slate-500">{member.role}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
