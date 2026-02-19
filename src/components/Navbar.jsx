import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/reoyh-logo.png'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Student Register', to: '/student-register' },
  { label: 'Tutor Apply', to: '/tutor-apply' },
  { label: 'Student Dashboard', to: '/student-dashboard' },
  { label: 'Tutor Dashboard', to: '/tutor-dashboard' },
  { label: 'Admin Dashboard', to: '/admin-dashboard' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="REOYH logo" className="h-10 w-10" />
          <div>
            <p className="text-lg font-bold text-primary">REOYH</p>
            <p className="text-xs text-slate-500">Trusted Tutor Marketplace</p>
          </div>
        </Link>
        <div className="flex flex-wrap gap-2 text-sm">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-xl2 px-3 py-2 transition ${
                  isActive ? 'bg-indigo-50 text-primary' : 'text-slate-600 hover:bg-slate-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
