import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md flex items-center justify-center text-white font-bold">UP</div>
          <div>
            <div className="font-semibold text-lg">UPR Portal</div>
            <div className="text-sm text-gray-500">Student Project Application System</div>
          </div>
        </div>
        <nav className="space-x-4 hidden md:block">
          <Link href="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
          <Link href="/student" className="text-gray-600 hover:text-gray-900">Students</Link>
          <Link href="/professor" className="text-gray-600 hover:text-gray-900">Professors</Link>
          <Link href="/mentor" className="text-gray-600 hover:text-gray-900">Mentors</Link>
        </nav>
      </header>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Find, Request, and Manage Student Projects
            </h1>
            <p className="text-gray-600 mb-6 max-w-xl">
              A centralized portal for professors, mentors, and students to collaborate on university projects — post projects, request mentorship, and apply with documents.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/student" className="inline-flex items-center justify-center px-6 py-3 btn-primary rounded-md shadow">
                Browse Projects
              </Link>
              <Link href="/professor" className="inline-flex items-center justify-center px-6 py-3 btn-secondary rounded-md">
                Professor Dashboard
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Open Projects</div>
                <div className="text-lg font-semibold">12</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Pending Applications</div>
                <div className="text-lg font-semibold">3</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Active Mentors</div>
                <div className="text-lg font-semibold">7</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="w-full h-80 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg flex items-center justify-center">
              {/* Decorative illustration placeholder */}
              <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="220" height="220" rx="20" fill="url(#g)" />
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#EEF2FF" />
                    <stop offset="1" stopColor="#EFF6FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Choose your role</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link href="/student" className="block p-6 rounded-lg role-card hover:shadow-lg transition">
            <div className="font-semibold mb-1">Student</div>
            <div className="text-sm muted">Browse projects and submit applications with your documents.</div>
          </Link>

          <Link href="/professor" className="block p-6 rounded-lg role-card hover:shadow-lg transition">
            <div className="font-semibold mb-1">Professor</div>
            <div className="text-sm muted">Post projects and review student applications.</div>
          </Link>

          <Link href="/mentor" className="block p-6 rounded-lg role-card hover:shadow-lg transition">
            <div className="font-semibold mb-1">Mentor</div>
            <div className="text-sm muted">Request projects and share mentor materials with students.</div>
          </Link>
        </div>
      </section>

      <footer className="border-t bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">© 2025 UPR Portal — Built for demo</div>
      </footer>
    </main>
  );
}
