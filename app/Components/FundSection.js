export default function FundSection() {
    return (
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">Fund someone today</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <img src="/fund1.png" alt="Fund 1" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Help Devita beat cancer</h3>
              <p className="mt-2 text-gray-600">₦800,000 raised - 347 donations</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <img src="fund2.png" alt="Fund 2" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Help Father and his 20 year old son</h3>
              <p className="mt-2 text-gray-600">₦800,000 raised - 347 donations</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <img src="fund3.png" alt="Fund 3" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Community bridge</h3>
              <p className="mt-2 text-gray-600">₦800,000 raised - 347 donations</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  