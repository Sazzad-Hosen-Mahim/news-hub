import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">News Hub</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Press</a></li>
            </ul>
           
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">office</h3>
            {/* <ul>
              <li><a href="mailto:info@example.com" className="hover:text-blue-400">info@example.com</a></li>
              <li><a href="tel:+123456789" className="hover:text-blue-400">+1 (234) 567-89</a></li>
              <li><a href="#" className="hover:text-blue-400">Support</a></li>
            </ul> */}
            <h4>ITPL Road</h4>
            <h4>Whiteland Dhaka</h4>
            <h4>Bangladesh</h4>
            <h4>info@example.com</h4>
            <h4>+1 (234) 567-89</h4>
          </div>

          {/* Right Section */}

          <div>

              <h3>NewsHub</h3>
              {/* <div className='flex item-center justify-center pt-4 '>
                <input type='text'  className='border-none placeholder:text-white    rounded-md border-b-4 border-gray-500 focus: outline-none focus:border-blue-500 placeholder:bg-gray-400 text-gray-800 w-64 p-0' />
              </div> */}
            
            <div className=" flex space-x-6 pt-3">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
              <a href="#" className="hover:text-blue-400">Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-600 py-10 text-center">
          <p className="text-sm text-gray-400">&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
