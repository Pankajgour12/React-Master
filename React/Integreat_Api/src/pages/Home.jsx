const Home = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-between max-w-7xl mx-auto px-6">
      
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Build Modern UI with <span className="text-orange-700">React</span>
        </h1>

        <p className="text-lg text-gray-600 mt-4">
          Clean, fast and scalable web apps with modern Api and fetch data.
        </p>

        <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-rose-600 transition">
          Get Started
        </button>
      </div>

    </div>
  );
};

export default Home;