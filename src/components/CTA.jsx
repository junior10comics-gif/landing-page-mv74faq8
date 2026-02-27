import React from 'react';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied customers today</p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
          Start Free Trial
        </button>
      </div>
    </section>
  );
}