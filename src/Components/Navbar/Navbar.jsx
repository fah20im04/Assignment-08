import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { Github } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="max-w-[1280px] mx-auto">
      <nav className="bg-white border-b border-blue-300 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">


          <div className="flex items-center space-x-3">

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-800 focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>


            <div className="flex items-center space-x-2">
              <Link to='/'>
                <img src={logo} alt="Hero.io" className="w-10 h-10" />

              </Link>
              <h1 className="font-bold text-blue-600 text-lg">HERO.IO</h1>
            </div>
          </div>


          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium ${isActive
                  ? "text-purple-600 border-b-2 border-purple-500"
                  : "text-gray-700 hover:text-purple-500"
                } pb-1`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                `text-sm font-medium ${isActive
                  ? "text-purple-600 border-b-2 border-purple-500"
                  : "text-gray-700 hover:text-purple-500"
                } pb-1`
              }
            >
              Apps
            </NavLink>
            <NavLink
              to="/installations"
              className={({ isActive }) =>
                `text-sm font-medium ${isActive
                  ? "text-purple-600 border-b-2 border-purple-500"
                  : "text-gray-700 hover:text-purple-500"
                } pb-1`
              }
            >
              Installation
            </NavLink>
          </div>


          <div>
            <a
              href="https://github.com/fah20im04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              <Github size={16} />
              Contribute
            </a>

          </div>
        </div>


        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-3 space-y-3">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium ${isActive ? "text-purple-600" : "text-gray-700 hover:text-purple-500"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium ${isActive ? "text-purple-600" : "text-gray-700 hover:text-purple-500"
                }`
              }
            >
              Apps
            </NavLink>
            <NavLink
              to="/installation"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium ${isActive ? "text-purple-600" : "text-gray-700 hover:text-purple-500"
                }`
              }
            >
              Installation
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
