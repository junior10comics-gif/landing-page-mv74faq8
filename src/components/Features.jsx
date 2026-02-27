import React from 'react';

export default function Features() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', description: 'Optimized for speed and performance' },
    { icon: '🔒', title: 'Secure', description: 'Enterprise-grade security built-in' },
    { icon: '📊', title: 'Analytics', description: 'Powerful insights and reporting' },
    { icon: '🎨', title: 'Customizable', description: 'Tailor it to your needs' },
    { icon: '🌐', title: 'Global', description: 'Available worldwide, 24/7' },
    { icon: '💬', title: 'Support', description: 'Expert support when you need it' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}