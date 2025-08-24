import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

export default function HeaderLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-blue-700 cursor-pointer">
            <Link to="/">Avtori</Link>
          </h1>

          <div className="flex-1 mx-4 max-w-2xl hidden md:block">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search translations, definitions..."
                className="w-full pl-12 pr-4 py-2 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-blue-600 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden md:block relative group">
              <select className="appearance-none bg-gray-100 border border-gray-300 rounded-full py-2 pl-4 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all duration-200 group-hover:bg-gray-200">
                <option>English</option>
                <option>ქართული</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <nav className="hidden md:flex gap-4 items-center">
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Log in
              </Link>
              <Link
                to="/registration"
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md"
              >
                Register
              </Link>
            </nav>

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-blue-600 text-3xl focus:outline-none"
              >
                ☰
              </button>
            </div>
          </div>
        </div>


        <div
          className={`md:hidden bg-white shadow-lg ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              Log in
            </Link>
            <Link
              to="/registration"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
              onClick={toggleMobileMenu}
            >
              Register
            </Link>
            <div className="mt-2 px-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-4 pr-4 py-2 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-2 px-3">
              <div className="relative">
                <select className="appearance-none w-full bg-gray-100 border border-gray-300 rounded-full py-2 pl-4 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                  <option>English</option>
                  <option>Русский</option>
                  <option>Deutsch</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <Outlet />
      </main>
    </>
  );
}
