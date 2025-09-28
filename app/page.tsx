import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-24 px-4">
        <h1 className="text-5xl font-bold mb-4">
          University Project Request Portal
        </h1>
        <p className="text-xl mb-8">
          Find, request, and manage projects effortlessly.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/student/projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
          >
            Students
          </Link>
          <Link
            href="/professor/dashboard"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
          >
            Professors
          </Link>
          <Link
            href="/coordinator/dashboard"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
          >
            Coordinators
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Browse Projects</h3>
            <p>Students can view available projects with details.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Request Approval</h3>
            <p>Professors manage incoming project requests efficiently.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Coordinator Oversight</h3>
            <p>Post projects and monitor requests in a single dashboard.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Secure & Role-Based</h3>
            <p>Access control ensures users only see what they’re allowed.</p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <ol className="space-y-8 list-decimal list-inside text-left">
          <li>
            <strong>Sign Up / Login:</strong> Create your account with your
            role.
          </li>
          <li>
            <strong>Explore / Manage Projects:</strong> Students request,
            Professors approve, Coordinators post.
          </li>
          <li>
            <strong>Track & Complete:</strong> Monitor requests and assignments
            efficiently.
          </li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 University Project Portal. All rights reserved.</p>
      </footer>
    </main>
  );
}
