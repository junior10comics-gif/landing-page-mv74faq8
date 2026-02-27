import React from 'react';

export default function Pricing() {
  const plans = [
    { name: 'Starter', price: '$29', features: ['5 Projects', '10GB Storage', 'Email Support'] },
    { name: 'Pro', price: '$79', features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics'], popular: true },
    { name: 'Enterprise', price: '$199', features: ['Everything in Pro', 'Dedicated Support', 'Custom Integrations', 'SLA'] }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`p-8 rounded-lg border-2 ${plan.popular ? 'border-purple-600 shadow-xl scale-105' : 'border-gray-200'}`}>
              {plan.popular && <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <p className="text-4xl font-bold my-4">{plan.price}<span className="text-lg text-gray-500">/mo</span></p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold ${plan.popular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}