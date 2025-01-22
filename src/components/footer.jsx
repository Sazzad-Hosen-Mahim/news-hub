import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Company</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <ul>
              <li>
                <a
                  href="mailto:info@example.com"
                  className="hover:text-blue-400"
                >
                  info@example.com
                </a>
              </li>
              <li>
                <a href="tel:+123456789" className="hover:text-blue-400">
                  +1 (234) 567-89
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-400">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-400">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-400">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
