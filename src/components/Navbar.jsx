// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-5xl mx-auto px-6">
        <ul className="flex justify-center sm:justify-between items-center py-4 font-medium text-gray-700">
          <li className="text-xl font-bold text-green-600">Dev Portfolio</li>
          <div className="flex gap-6">
            <li>
              <a
                href="#landing"
                className="hover:text-green-600 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-green-600 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-green-600 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-green-600 transition-colors"
              >
                Education
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}
