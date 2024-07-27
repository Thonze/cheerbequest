import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function HowItWorks() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center">How Cheer Bequest Works</h1>
        <p className="mt-4 text-center text-lg text-gray-600">
          CheerBequest is the best place to fundraise, whether you are an individual, group, or organization.
        </p>
        <div className="mt-10 flex justify-center">
          <img src="/images/how-it-works.png" alt="How it works illustration" className="w-full max-w-2xl" />
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Start your fundraiser</h2>
            <ul className="mt-2 text-gray-600">
              <li>Set your fundraiser goal</li>
              <li>Tell your story</li>
              <li>Add a picture or video</li>
              <li>Watch a tutorial</li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold">Share with friends</h2>
            <ul className="mt-2 text-gray-600">
              <li>Send emails</li>
              <li>Send text messages</li>
              <li>Share on social media</li>
              <li>Watch a tutorial</li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold">Manage Donations</h2>
            <ul className="mt-2 text-gray-600">
              <li>Accept donations</li>
              <li>Thank donors</li>
              <li>Withdraw funds</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center">
          <a href="/start-fundraiser" className="bg-blue-600 text-white py-2 px-4 rounded-full">
            Start a CheerBequest
          </a>
        </div>
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-extrabold">Fast and secure</h2>
          <p className="mt-4 text-lg text-gray-600">
            Millions trust CheerBequest as the #1 online fundraising expert. That’s why more people start fundraisers on CheerBequest than any other platform.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
