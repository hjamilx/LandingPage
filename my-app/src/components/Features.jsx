import { FaBolt, FaLock, FaChartLine } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 mb-12">
          We provide the best solutions for your business needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <div className="flex justify-center items-center w-16 h-16 bg-blue-100 text-blue-500 rounded-full mx-auto mb-4">
              <FaChartLine size={30} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">High Performance</h3>
            <p className="text-gray-600">
              Our services are optimized for speed and efficiency.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <div className="flex justify-center items-center w-16 h-16 bg-yellow-100 text-yellow-500 rounded-full mx-auto mb-4">
              <FaLock size={30} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">
              We ensure top-level security to protect your data.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <div className="flex justify-center items-center w-16 h-16 bg-red-100 text-red-500 rounded-full mx-auto mb-4">
              <FaBolt size={30} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Deployment</h3>
            <p className="text-gray-600">
              Get your system up and running in no time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
