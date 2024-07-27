export default function TopicsSection() {
    return (
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">Topic of Interest..</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img src="/topic.png" alt="Topic 1" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Any mechanical keyboard enthusiasts in design?</h3>
              <p className="mt-2 text-gray-600">Read More</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <img src="/topic.png" alt="Topic 2" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Any mechanical keyboard enthusiasts in design?</h3>
              <p className="mt-2 text-gray-600">Read More</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <img src="/topic.png" alt="Topic 3" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Any mechanical keyboard enthusiasts in design?</h3>
              <p className="mt-2 text-gray-600">Read More</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  