"use client"
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
     <Navbar />
      <main className="container mx-auto px-4">
        <section className="my-8">
          <h1 className="text-4xl font-bold">Search for fundraisers.</h1>
          <p className="mt-2 text-gray-600">
            All throughout the world, people are raising money for the causes they are most passionate about.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">Start a CheerBequest</button>
        </section>
        <section className="my-8">
          <h2 className="text-3xl font-bold">Top Fundraisers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {/* Fundraiser Cards */}
            {Array(6).fill(null).map((_, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow">
                <img src="/path/to/image.jpg" alt="Fundraiser" className="rounded-t-lg h-48 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Fundraiser Title</h3>
                  <p className="text-gray-600">Description goes here. Description goes here.</p>
                  <div className="mt-4">
                    <span className="text-green-600 font-semibold">₦800,000 raised</span>
                    <span className="text-gray-600 ml-2">347 donations</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fundsraising categories */}
        <section>
              <h2>Categories Icon here</h2>
        </section>
        {/* Health Fundraisers */}
        <section className="my-8">
          <h2 className="text-3xl font-bold">Health Fundraisers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {/* Fundraiser Cards */}
            {Array(6).fill(null).map((_, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow">
                <img src="/path/to/image.jpg" alt="Fundraiser" className="rounded-t-lg h-48 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Fundraiser Title</h3>
                  <p className="text-gray-600">Description goes here. Description goes here.</p>
                  <div className="mt-4">
                    <span className="text-green-600 font-semibold">₦800,000 raised</span>
                    <span className="text-gray-600 ml-2">347 donations</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default page