import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import logo from './assets/images/logo.png'
import { motion } from 'framer-motion'
import '../style.css'

const App = () => {
  const [mousePosition , setMousePosition] = useState({
    x : 0,
    y : 0
  })
  const [cursorInSection, setCursorInSection] = useState(false);
  const [mouseVariant , setMouseVariant] = useState('default')

  useEffect(() => {
    const mouseMove = e => {
      if (cursorInSection) {
        setMousePosition({
          x : e.clientX,
          y : e.clientY - 50
        })
      }
    }

    window.addEventListener('mousemove',mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  })
  const variants = {
    default : {
      x : mousePosition.x - 16,
      y : mousePosition.y - 16
    },
    text : {
      width : 100,
      height : 100,
      x : mousePosition.x - 50,
      y : mousePosition.y - 50,
      backgroundColor : '#1d4ed8' ,
      mixBlendMode : 'difference'
    }
  }
  const textEnter =() => setMouseVariant('text')
  const textLeave = () => setMouseVariant('default')
  const cursorEnter = () => setCursorInSection(true);
  const cursorLeave = () => setCursorInSection(false);
  return (
    <>
    <Navbar />
    <section className="bg-blue-700 py-20 mb-4 special relative" onMouseEnter={cursorEnter} onMouseLeave={cursorLeave}>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            onMouseEnter={textEnter} onMouseLeave={textLeave}
            className="animate-bounce text-4xl font-extrabold text-white sm:text-5xl md:text-6xl inline-block"
          >
            Get Your <span className='text-black'>Dream</span> Design
          </h1>
          <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="transition ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 duration-300 my-4 shadow-xl hover:shadow-inner font-bold text-xl text-white bg-clip-content p-6 border-4 border-white border-dashed">
            <p className='animateText border-r-4 inline-block'>Hire us to Do the hard work for you</p>
          </p>
        </div>
        <motion.div className='Cursor' variants={variants} animate={mouseVariant}/>
      </div>
    </section>

    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold"><span>Know More About Us</span></h2>
            <p className="mt-2 mb-4">
              <span>Who we are and what we do</span>
              
            </p>
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Learn More
            </a>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold"><span>Our Work</span></h2>
            <p className="mt-2 mb-4">
              <span>The Work we did in the past and clients reviews</span>
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
            >
              Portifolio
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2  className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Top Survices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Best Seller</div>
                <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                  <img
                    className="h-12 w-auto"
                    src= {logo}
                    alt="The Logo"
                  />
                  <h3 className="text-xl font-bold">Logo Design</h3>
                </a>
                
              </div>

              <div className="mb-5">
              boiler plate description
              </div>

              <h3 className="text-blue-500 mb-2">$70 - $1200</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  expected delevery within : 5 to 15 days
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                Read More
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Best Reviews</div>
                <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                  <img
                    className="h-12 w-auto"
                    src= {logo}
                    alt="The Logo"
                  />
                  <h3 className="text-xl font-bold">video editing</h3>
                </a>
                
              </div>

              <div className="mb-5">
              boiler plate description
              </div>

              <h3 className="text-blue-500 mb-2">$70 - $1200</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  expected delevery within : 5 to 15 days
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                Read More
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Popular</div>
                <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                  <img
                    className="h-12 w-auto"
                    src= {logo}
                    alt="The Logo"
                  />
                  <h3 className="text-xl font-bold">Web Development</h3>
                </a>
                
              </div>

              <div className="mb-5">
              boiler plate description
              </div>

              <h3 className="text-blue-500 mb-2">$1200 - $9000</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  expected delevery within : 15 to 60 days
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="m-auto max-w-lg my-10 px-6">
      <a 
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Survices</a
      >
    </section>
    </>
  )
}

export default App