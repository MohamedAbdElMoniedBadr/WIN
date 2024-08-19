import React from 'react'
import logo from '../assets/images/logo.png'
import win from '../assets/images/win.png'

const Navbar = () => {
  return (
    <nav className="bg-blue-700 border-b border-blue-500 sticky relative">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        
        <div className="flex h-20 items-center justify-between">
          <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img
                className="h-28 w-auto"
                src= {logo}
                alt="The Logo"
              />
              <img
                className="h-28 w-auto"
                src= {win}
                alt="The Logo"
              />
            </a>
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <a
                  href="/index.html"
                  className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Home</a
                >
                <a
                  href="/jobs.html"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Survices</a
                >
                <a
                  href="/add-job.html"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Portifolio</a
                >
                <a
                  href="/add-job.html"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Contact</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar