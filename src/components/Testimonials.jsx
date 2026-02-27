import React from 'react';

export default function Testimonials() {
  const testimonials = [
    { name: 'Sarah Johnson', role: 'CEO, TechCorp', text: 'This product changed how we work. Highly recommended!' },
    { name: 'Mike Chen', role: 'Founder, StartupXYZ', text: 'Amazing results in just 2 weeks. Worth every penny.' },
    { name: 'Emily Davis', role: 'Director, BigCo', text: 'The best investment we made this year.' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}