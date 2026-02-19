export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm text-slate-600">

        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            REOYH
          </h3>
          <p>
            Trusted Home & Online Tutor Marketplace connecting verified tutors with students across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-slate-800 mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-accent transition">Home</a></li>
            <li><a href="/student-register" className="hover:text-accent transition">Find Tutor</a></li>
            <li><a href="/tutor-apply" className="hover:text-accent transition">Become Tutor</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-slate-800 mb-3">
            Contact
          </h4>
          <p>Email: support@reoyh.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
          <p>India</p>
        </div>

      </div>

      <div className="border-t text-center py-4 text-xs text-slate-500">
        © {new Date().getFullYear()} REOYH. All rights reserved.
      </div>
    </footer>
  );
}
