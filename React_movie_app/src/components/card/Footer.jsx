import React from 'react'

const Footer = () => {
  return (
    <div>

        <footer className="bg-gray-900 text-gray-300 py-8">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    {/* Logo / Brand */}
    <div className="mb-4 md:mb-0">
      <span className="text-2xl font-bold text-white">MOVIEHUB</span>
      <div className="text-sm text-gray-400">Streaming Movies & Shows</div>
    </div>

    {/* Links */}
    <div className="flex space-x-6 mb-4 md:mb-0">
      <a href="#" className="hover:text-white transition-colors">Home</a>
      <a href="#" className="hover:text-white transition-colors">Movies</a>
      <a href="#" className="hover:text-white transition-colors">Trending</a>
      <a href="#" className="hover:text-white transition-colors">Contact</a>
    </div>

    {/* Social / Copyright */}
    <div className="text-sm text-gray-500">
      &copy; {new Date().getFullYear()} MovieHub. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer