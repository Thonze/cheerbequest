import React from 'react'
import Link from 'next/link';
import Image from "next/image";

const Footer = () => {
  return (
    <div>
     <footer className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
              <Link href="/" className="text-lg font-bold flex items-center">
                  <Image
                      src="/logo.svg"
                      alt="Vercel Logo"
                      className="dark:invert"
                      width={70}
                      height={24}
                      priority
                    />
              </Link>
                <p className="text-gray-700">© 2021-2022 Cheerbequest</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Learn More</h4>
                <ul>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">How Cheer Bequest Works</a></li>
                  <li><a href="/success-stories" className="text-gray-700 hover:text-gray-900">Success Stories</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">FAQ</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Legal</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Raise Fund For</h4>
                <ul>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Health</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Education</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Agriculture</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Community</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">see more</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Resources</h4>
                <ul>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">About Us</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Blog</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact support</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Terms</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-700 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-700 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-700 hover:text-gray-900"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-gray-700 hover:text-gray-900"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </footer>

    </div>
  )
}

export default Footer