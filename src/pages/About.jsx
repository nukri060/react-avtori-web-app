import React from 'react';

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black relative inline-block">
            About My Art and Me
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-200 rounded-full"></span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the story behind the ink and the artist who brings it to life
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Hello! My name is [Artist Name], and I am a passionate tattoo artist with over a decade of experience in the world of body art.
              My journey began with a love for drawing and a deep admiration for how art can be immortalized on the body.
              I believe that every tattoo is not just a drawing; it's a story, an emotion, and a part of a person's identity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="relative group overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
            <img 
              src="https://i.pinimg.com/1200x/1c/28/d2/1c28d2e74f235fc37d59f5adfce82049.jpg" 
              alt="Tattoo Studio" 
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-white font-medium">My Studio</span>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
            <img 
              src="https://i.pinimg.com/736x/e8/35/16/e835163a15f0272a552455c57dc35629.jpg" 
              alt="Tattoo Process" 
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-white font-medium">Creative Process</span>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
            <img 
              src="https://i.pinimg.com/736x/a5/3d/db/a53ddb12b4b633fd1de1865ea788850e.jpg" 
              alt="Tattoo Sketches" 
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-white font-medium">Sketches & Ideas</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">My Specialization</h2>
            <p className="text-lg text-gray-700">
              My specialization is creating unique, custom designs that reflect the inner world of each client.
              I work in various styles, from realism to traditional, from graphic to watercolor, always striving for perfection in every detail.
              Each sketch is developed from scratch to ensure its exclusivity and full compliance with your wishes.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Continuous Learning</h2>
            <p className="text-lg text-gray-700">
              In addition to tattooing, I also dedicate a lot of time to drawing and learning new techniques.
              This helps me continuously evolve and bring fresh ideas into my work.
              I believe that learning is an endless process, and I am always looking for ways to expand my artistic horizons.
            </p>
          </div>
        </div>


        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-200 rounded-2xl p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Create Together</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            If you are looking for more than just a tattoo — a work of art that will be with you for a lifetime —
            I will be happy to help you bring your dream to life. Come to me for a consultation, and let's create something incredible together!
          </p>
          <button className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}