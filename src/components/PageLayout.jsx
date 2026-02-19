import Navbar from './Navbar'
import Footer from './Footer'

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="page-wrapper mx-auto max-w-6xl px-4 py-10">{children}</main>
      <Footer />
    </div>
  )
}
