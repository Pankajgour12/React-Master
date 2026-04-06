const Contact = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-rose-500 mb-4 text-center">
          Contact Us
        </h1>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded mb-3"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded mb-3"
        />

        <textarea
          placeholder="Message"
          className="w-full border p-2 rounded max-h-32 mb-4"
        />

        <button className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600 transition">
          Send Message
        </button>
      </div>

    </div>
  );
};

export default Contact;