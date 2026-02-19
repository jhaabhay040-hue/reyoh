import { useState } from 'react'
import Button from '../components/Button'
import FormInput from '../components/FormInput'

const initialState = {
  name: '',
  email: '',
  phone: '',
  subjects: '',
  experience: '',
  city: '',
}

export default function TutorApply() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  const validate = () => {
    const nextErrors = {}
    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) nextErrors[key] = 'This field is required.'
    })

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    setSuccess('')

    if (Object.keys(nextErrors).length === 0) {
      setSuccess('Application submitted successfully! We will review your profile soon.')
      setForm(initialState)
    }
  }

  return (
    <section className="mx-auto max-w-2xl rounded-xl2 border border-slate-100 p-6 shadow-soft">
      <h1 className="mb-6 text-2xl font-semibold">Tutor Application</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <FormInput
          label="Name"
          name="name"
          value={form.name}
          error={errors.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <FormInput
          label="Email"
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
          label="Subjects"
          name="subjects"
          value={form.subjects}
          error={errors.subjects}
          onChange={(e) => setForm({ ...form, subjects: e.target.value })}
        />
        <FormInput
          label="Experience"
          name="experience"
          value={form.experience}
          error={errors.experience}
          onChange={(e) => setForm({ ...form, experience: e.target.value })}
        />
        <FormInput
          label="City"
          name="city"
          value={form.city}
          error={errors.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />
        <div className="md:col-span-2">
          <Button type="submit">Submit Application</Button>
        </div>
      </form>
      {success && <p className="mt-4 text-sm font-medium text-accent">{success}</p>}
    </section>
  )
}
