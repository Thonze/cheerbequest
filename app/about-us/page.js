"use client"
// pages/about.js
import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Image from "next/image";

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4">
        <section className="my-8 text-center">
          <h1 className="text-4xl font-bold">About Cheer Bequest</h1>
          <p className="mt-4 text-gray-700">
            Cheer Bequest is a donation-based fundraising and crowdfunding platform, where individuals, NGOs, and other organizations with causes, problems, and projects can easily raise funds earnestly. By using our go-to portal for crowdfunding in Nigeria and the countries we're operating in so far, Charities, SchoolAlumnus, Religion.
          </p>
          <p className="mt-4 text-gray-700">
            Cheer Bequest is a donation-based fundraising and crowdfunding platform, where individuals, NGOs, and other organizations with causes, problems, and projects can easily raise funds earnestly. By using our go-to portal for crowdfunding in Nigeria and the countries we're operating in so far, Charities, SchoolAlumnus, Religion.
          </p>
        </section>
        <section className="my-8">
        <Image
              src="/mission.png"
              alt="mission img"
              className="dark:invert"
              width={100}
              height={100}
              priority
            />
        </section>
        <section className="my-8 bg-gray-100 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">OUR MISSION</h2>
              <p className="text-gray-700">
                At Cheer Bequest, we aim to build a suitable, reliable, and secured platform that will assist businesses and individuals in raising funds for their causes and businesses. We hope to make life and survival easy for Nigeria and other countries.
              </p>
            </div>
            <div>
            <Image
              src="/mission.png"
              alt="mission img"
              className="dark:invert"
              width={1000}
              height={1000}
              priority
            />
            </div>
            <div>
            <Image
              src="/mission.png"
              alt="mission img"
              className="dark:invert"
              width={100}
              height={100}
              priority
            />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">OUR VISION</h2>
              <p className="text-gray-700">
                At Cheer Bequest, we aim to build a suitable, reliable, and secured platform that will assist businesses and individuals in raising funds for their causes and businesses. We hope to make life and survival easy for Nigeria and other countries.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
