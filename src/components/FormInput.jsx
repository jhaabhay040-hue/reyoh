export default function FormInput({ label, name, error, ...props }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
      {label}
      <input
        name={name}
        className={`rounded-xl2 border px-3 py-2 outline-none transition focus:border-primary ${
          error ? 'border-red-500' : 'border-slate-300'
        }`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  )
}
