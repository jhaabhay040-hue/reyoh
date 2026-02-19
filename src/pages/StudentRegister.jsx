import { useState } from 'react'
import Button from '../components/Button'
import FormInput from '../components/FormInput'

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  grade: '',
  password: '',
}

export default function StudentRegister() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  const validate = () => {
    const nextErrors = {}
    if (!form.fullName.trim()) nextErrors.fullName = 'Full Name is required.'
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email.'
    if (!form.phone.trim()) nextErrors.phone = 'Phone is required.'
    else if (!/^\d+$/.test(form.phone)) nextErrors.phone = 'Phone must be numeric only.'
    if (!form.city.trim()) nextErrors.city = 'City is required.'
    if (!form.grade.trim()) nextErrors.grade = 'Grade is required.'
    if (!form.password.trim()) nextErrors.password = 'Password is required.'
    else if (form.password.length < 6) nextErrors.password = 'Password must be at least 6 characters.'

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    setSuccess('')

    if (Object.keys(nextErrors).length === 0) {
      setSuccess('Registration successful! Our team will contact you shortly.')
      setForm(initialState)
    }
  }

  return (
    <section className="mx-auto max-w-2xl rounded-xl2 border border-slate-100 p-6 shadow-soft">
      <h1 className="mb-6 text-2xl font-semibold">Student Registration</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <FormInput
          label="Full Name"
          name="fullName"
          value={form.fullName}
          error={errors.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={form.email}
          error={errors.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <FormInput
          label="Phone"
          name="phone"
          value={form.phone}
          error={errors.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <FormInput
          label="City"
          name="city"
          value={form.city}
          error={errors.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />
        <FormInput
          label="Grade"
          name="grade"
          value={form.grade}
          error={errors.grade}
          onChange={(e) => setForm({ ...form, grade: e.target.value })}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={form.password}
          error={errors.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <div className="md:col-span-2">
          <Button type="submit">Register</Button>
        </div>
      </form>
      {success && <p className="mt-4 text-sm font-medium text-accent">{success}</p>}
    </section>
  )
}
