export default function StepsSection() {
    return (
      <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold">Start a Fundraiser in three simple steps</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">Start your fundraiser</h3>
            <p className="mt-4 text-gray-600">By creating an account, you can have access to create a campaign for a cause</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">Share your fundraiser</h3>
            <p className="mt-4 text-gray-600">Share campaigns with family and friends to raise funds for each target</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">Withdraw Funds</h3>
            <p className="mt-4 text-gray-600">Withdraw funds raised from campaigns easily after each campaign</p>
          </div>
        </div>
      </div>
    </section>

) 
} 
