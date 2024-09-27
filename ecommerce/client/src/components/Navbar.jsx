import { useState } from 'react';
import { FiUser, FiShoppingCart, FiChevronDown } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom'; // Import Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const navigate = useNavigate()

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0 h-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Shop Name */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-gray-800">SZS Mall</h1>
          </div>

          {/* Centered Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/shop" className="text-gray-600 hover:text-gray-900"> {/* Link to Shop page */}
              Shop
            </Link>

            {/* Categories Link with Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-600 hover:text-gray-900 focus:outline-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Categories
                <FiChevronDown className='ml-1 w-4 h-4'></FiChevronDown>
              </button>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-20"
                  onClick={() => setIsDropdownOpen(true)}
                >
                  <Link
                    to="/electronics" // Example link
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Electronics
                  </Link>
                  <Link
                    to="/fashion"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Fashion
                  </Link>
                  <Link
                    to="/jewelry"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Jewelry
                  </Link>
                  <Link
                    to="/accessories"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Accessories
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>

          {/* Right-side Icons */}
          <div className="flex items-center space-x-6">
            <FiUser className="text-gray-600 w-6 h-6 hover:text-gray-900 cursor-pointer" />
            <FiShoppingCart
              className="text-gray-600 w-6 h-6 hover:text-gray-900 cursor-pointer"
              onClick={() => navigate('/AddToCart')} // Step 4: Navigate to cart page
            />
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-200">
            <Link
              to="/"
              className="block text-gray-600 hover:text-gray-900 py-2"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block text-gray-600 hover:text-gray-900 py-2"
            >
              Shop
            </Link>

            {/* Mobile Categories Dropdown */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
              >
                Categories
                <FiChevronDown className='ml-1 w-4 h-4 inline'></FiChevronDown>
              </button>
              {isDropdownOpen && (
                <div className="pl-4">
                  <Link
                    to="/electronics"
                    className="block text-gray-600 hover:text-gray-900 py-2"
                  >
                    Electronics
                  </Link>
                  <Link
                    to="/fashion"
                    className="block text-gray-600 hover:text-gray-900 py-2"
                  >
                    Fashion
                  </Link>
                  <Link
                    to="/jewelry"
                    className="block text-gray-600 hover:text-gray-900 py-2"
                  >
                    Jewelry
                  </Link>
                  <Link
                    to="/accessories"
                    className="block text-gray-600 hover:text-gray-900 py-2"
                  >
                    Accessories
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="block text-gray-600 hover:text-gray-900 py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
