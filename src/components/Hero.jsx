import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-pink-500 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Transform Your Business Today
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          The ultimate solution for modern businesses. Increase productivity by 10x with our innovative platform.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started Free
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}