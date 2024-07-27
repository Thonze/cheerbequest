export default function CategoriesSection() {
    return (
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">Raise Funds for</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <img src="/Emergency.svg" alt="Emergency" className="h-24 w-24 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">Emergency</h3>
            </div>
            <div className="text-center">
              <img src="/Community.svg" alt="Community" className="h-24 w-24 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">Community</h3>
            </div>
            <div className="text-center">
              <img src="/Business.svg" alt="Business" className="h-24 w-24 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">Business</h3>
            </div>
            <div className="text-center">
              <img src="/UsersThree.svg" alt="Family" className="h-24 w-24 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">Family</h3>
            </div>
            <div className="text-center">
              <img src="/Health.svg" alt="Health" className="h-24 w-24 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">Health</h3>
            </div>
            <div className="text-center">
              <img src="/HandsClapping.svg" alt="Faith" className="h-24 w-24 mx-auto" />
              <h3 className="mt-4 text-xl font-bold">Faith</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
  