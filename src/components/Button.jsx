export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const styles = {
    primary: 'bg-primary text-white hover:bg-indigo-700',
    secondary: 'bg-white text-primary border border-primary hover:bg-indigo-50',
    accent: 'bg-accent text-white hover:bg-green-600',
  }

  return (
    <button
      className={`rounded-xl2 px-5 py-2.5 text-sm font-semibold shadow-soft transition-transform duration-200 hover:scale-105 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
