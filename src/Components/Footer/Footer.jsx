import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
            <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                <div>
                    <h1 className="text-2xl font-bold text-white mb-4">MyApp</h1>
                    <p className="text-gray-400">
                        Bringing the best apps and services to make your life easier.
                    </p>
                </div>


                <div>
                    <h2 className="font-semibold text-white mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
                        <li><a href="/apps" className="hover:text-blue-500 transition">Apps</a></li>
                        <li><a href="/allApps" className="hover:text-blue-500 transition">All Apps</a></li>
                        <li><a href="/installations" className="hover:text-blue-500 transition">Installations</a></li>
                    </ul>
                </div>


                <div>
                    <h2 className="font-semibold text-white mb-4">Resources</h2>
                    <ul className="space-y-2">
                        <li><a href="/about" className="hover:text-blue-500 transition">About Us</a></li>
                        <li><a href="/contact" className="hover:text-blue-500 transition">Contact</a></li>
                        <li><a href="/privacy" className="hover:text-blue-500 transition">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-blue-500 transition">Terms of Service</a></li>
                    </ul>
                </div>


                <div>
                    <h2 className="font-semibold text-white mb-4">Follow Us</h2>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} MyApp. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
