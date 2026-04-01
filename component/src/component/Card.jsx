import React from 'react'

const Card = () => {
  
    const flowersData = [
  {
    name: "Rose",
    image: "https://plus.unsplash.com/premium_photo-1703689520237-3667a9b43453?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A timeless symbol of love with soft red petals and a rich fragrance.",
    inStock: true
  },
  {
    name: "Sunflower",
    image: "https://images.unsplash.com/photo-1629797476194-676af5633f30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Bright yellow blooms that follow the sun, representing warmth and positivity.",
    inStock: true
  },
  {
    name: "Tulip",
    image: "https://images.unsplash.com/photo-1561181226-e8a7edd504c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant spring flowers known for their smooth shape and vibrant colors.",
    inStock: false
  },
  {
    name: "Lily",
    image: "https://images.unsplash.com/photo-1695556557825-97adbe470fd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlseXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Graceful white petals often associated with purity and calmness.",
    inStock: true
  },
  {
    name: "Orchid",
    image: "https://plus.unsplash.com/premium_photo-1673931249523-69dcbace086b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3JjaGlkfGVufDB8fDB8fHww",
    description: "Exotic and delicate flowers symbolizing beauty and luxury.",
    inStock: false
  }
];

    




  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-stone-900 to-black flex flex-wrap justify-center items-center gap-8 p-6">

  {flowersData.map((flower, index) => (
    
    <div
      key={index}
      className="group w-72 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl transition duration-500"
    >

      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={flower.image}
          alt={flower.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-white flex flex-col gap-2">

        <h3 className="text-xl font-bold">
          {flower.name}
        </h3>

        <p className="text-sm text-gray-300">
          {flower.description}
        </p>

        {/* Button */}
        <button className={`mt-3 py-2 rounded-lg ${flower.inStock ? "bg-green-400" : "bg-red-400"} text-black font-semibold hover:scale-105 active:scale-95 transition duration-300`}>
         {flower.inStock ? "In Stock" : "Out of Stock"} →
        </button>

      </div>

      {/* Glow Effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none 
      ${flower.inStock ? "bg-gradient-to-r from-emerald-400/20 to-green-500/20" : "bg-gradient-to-r from-red to-pink-500/20"} 
       
      blur-xl`}></div>

    </div>

  ))}

</div>
  )
}

export default Card