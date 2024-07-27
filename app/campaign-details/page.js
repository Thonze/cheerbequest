import Navbar from '../Components/Navbar';

export default function CampaignDetails() {
  return (
    <div>
      <Navbar />
      <main className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Kehinde's Tumor</h1>
          <div className="mt-6">
            <img src="/images/campaign-image.png" alt="Campaign" className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div className="mt-8 flex flex-col lg:flex-row lg:justify-between">
            <div className="lg:w-2/3">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">Viráig Merédeésze is organizing this fundraiser.</h2>
                <p className="mt-4 text-gray-700">
                  Bodhi, Played by Patrick Swayze, is part mystic, part criminal, and overall surfer. From clues developed by Pappas, it appears that he and his gang rob banks to support their surfing, and then move on when the seasons change. Johnny Utah does become friendly with them, and even falls in love with Bodhi's ex-girlfriend (Lori Petty), while trying to fit together the case. And then the plot grows truly ingenious, all the way down to its Zen ending on a lonely, storm-swept beach in Australia.
                </p>
                <a href="#" className="text-blue-600 hover:underline">Read more</a>
              </div>
              <div className="flex space-x-4">
                <button className="bg-orange-500 text-white py-2 px-6 rounded-lg">Donate</button>
                <button className="bg-gray-200 text-gray-900 py-2 px-6 rounded-lg flex items-center">
                  <span>Share</span>
                  <svg className="ml-2 w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path d="M15 8a3 3 0 11-2.828 2H8.828a3.001 3.001 0 010 2H12.17a3 3 0 110 2H8a3 3 0 01-.171-5.995L8 7h4.171A3.001 3.001 0 1115 8zm-5 1H4.828l2.122-2.122a1 1 0 10-1.414-1.414L2 9l3.536 3.536a1 1 0 001.415-1.415L4.828 10H10z"></path></svg>
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 mt-6 lg:mt-0">
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">₦8,196.66 raised of ₦100,953.55</div>
                <div className="text-gray-700 mt-2">446 people just donated</div>
                <button className="bg-orange-500 text-white w-full py-2 mt-4 rounded-lg">Donate</button>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900">Recent Donations</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex justify-between text-gray-700">
                    <span>Ruby Sorwhiede</span>
                    <span>₦1000.00</span>
                  </li>
                  <li className="flex justify-between text-gray-700">
                    <span>Anonymous</span>
                    <span>₦100,000.00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900">Organizers</h3>
            <div className="mt-4 flex items-center">
              <img src="/images/organizer.jpg" alt="Organizer" className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h4 className="text-lg font-bold text-gray-900">Esther Howard</h4>
                <p className="text-gray-700">Organizer, ASKOKOR, ABUJA</p>
                <button className="text-blue-600 hover:underline mt-2">Contact</button>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900">Word of Support (33)</h3>
            <div className="mt-4 space-y-4">
              <div className="p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700">Prayers for recovery</p>
                <p className="text-gray-500 text-sm">- Michael Semilinko, ₦0.00 - 1 day</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700">
                  God speed, quick recovery Lord and He knows what each of his days have in store (Psalm 139:13-16) and He is so abundant in love and faithfulness to him (Exodus 34:6-7)...I pray that him and this community remember that Jesus mourns with them (John 11:20-44) but that He brings complete healing by His Name....
                </p>
                <p className="text-gray-500 text-sm">- Michael Semilinko, ₦0.00 - 1 day</p>
                <a href="#" className="text-blue-600 hover:underline">Read more</a>
              </div>
            </div>
            <button className="mt-4 text-blue-600 hover:underline">Show More</button>
          </div>
        </div>
      </main>
      <footer className="bg-gray-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <div>
              <img src="/images/cheerbequest-logo.png" alt="CheerBequest" className="h-10" />
              <p className="mt-4 text-gray-500">© 2021-2022 Cheerbequest</p>
              <div className="mt-4 space-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-900">Terms</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Privacy</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Legal</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900">Learn More</h4>
                <ul className="mt-4 space-y-2">
                  {['How Cheer Bequest Works', 'Success Stories', 'FAQ', 'Legal'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Raise Fund For</h4>
                <ul className="mt-4 space-y-2">
                  {['Health', 'Education', 'Agriculture', 'Community', 'see more'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">Resources</h4>
              <ul className="mt-4 space-y-2">
                {['About Us', 'Blog', 'Contact support', 'Privacy Policy', 'Terms'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex space-x-4">
            {['facebook', 'twitter', 'instagram', 'youtube'].map((platform) => (
              <a key={platform} href="#" className="text-gray-500 hover:text-gray-900">
                <img src={`/icons/${platform}.svg`} alt={platform} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
