import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function SupportedCountries() {
  return (
    <div>
      <Navbar />
      <main className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Country supported on CheerBequest</h2>
          <p className="mt-6 text-gray-700 text-center">
            There are currently 15 countries that we can send funds to, and the person withdrawing the funds must meet the withdrawal requirements from the host country. The location of a fundraiser is chosen during the fundraiser creation process, and once the fundraiser is published, it cannot be changed. We are working to expand our services to more states in the future, but for now, your fundraiser must be created in one of the following states in Nigeria:
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {['USA', 'Gambia', 'United Kingdom', 'Nigeria', 'Ghana', 'Togo', 'Zambia', 'Egypt', 'Mali', 'UAE', 'South Africa', 'Liberia', 'Zimbabwe', 'Cameroon', 'Uganda'].map((country) => (
              <div key={country} className="border p-4 text-lg font-semibold text-gray-700">
                {country}
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700">
            If you do not meet the withdrawal requirements for one of these supported states, then please do not create an account and/or fundraiser. If a fundraiser is created by an organizer who does not meet supported state requirements, it is likely that all money raised will be refunded and the account will be removed from CheerBequest. If you accidentally created a fundraiser from an unsupported state or territory and raised funds, please contact us by clicking "Get help". You will need to ask someone in one of the supported countries above to raise money for you instead.
          </p>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900">Get notified when we are live in your country</h3>
            <p className="mt-2 text-gray-700">
              If you're thinking about setting up a GoFundMe fundraiser for an important cause in your life, we'd love to help. While we're not yet available in every country, we should be in the future. If you'd like, you can leave your contact information in this form, and we'll reach out when we're live.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related articles</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {[
              'Requirements to receive funds',
              'Raising funds for someone in an unsupported country',
              'Creating a GoFundMe from start to finish',
              'How to transfer funds',
              'Taxes for Organizers'
            ].map((article) => (
              <li key={article} className="mb-2">
                <a href="#" className="text-blue-600 hover:underline">{article}</a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
