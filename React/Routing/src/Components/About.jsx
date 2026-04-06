const About = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-rose-500">About Us</h1>

        <p className="text-gray-600 mt-4">
          We build scalable and modern web applications using React and latest technologies.
        </p>

        <button className="mt-6 px-5 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition">
          Learn More
        </button>
      </div>

    </div>
  );
};

export default About;