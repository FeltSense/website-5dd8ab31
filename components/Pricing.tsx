'use client';

import { Check, Camera, Zap, Crown } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: 899,
      period: 'per project',
      description: 'Perfect for small residential projects',
      icon: Camera,
      features: [
        '10-15 edited photos',
        '2-hour shoot duration',
        'Basic retouching',
        'High-resolution files',
        'Online gallery',
        '30-day delivery'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: 1899,
      period: 'per project',
      description: 'Most popular for commercial projects',
      icon: Zap,
      features: [
        '25-35 edited photos',
        '4-hour shoot duration',
        'Advanced retouching',
        'High-resolution files',
        'Online gallery',
        'Print release included',
        '14-day delivery',
        'Drone photography add-on'
      ],
      buttonText: 'Choose Professional',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 3299,
      period: 'per project',
      description: 'For large-scale developments',
      icon: Crown,
      features: [
        '50+ edited photos',
        'Full-day shoot',
        'Premium retouching',
        'High-resolution files',
        'Online gallery',
        'Print release included',
        'Rush delivery (7 days)',
        'Drone photography included',
        'Architecture consultation',
        'Usage rights included'
      ],
      buttonText: 'Contact for Enterprise',
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="text-primary-500 block mt-2">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional architectural photography packages designed to showcase your projects with artistic excellence and attention to detail
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                tier.popular 
                  ? 'ring-4 ring-primary-500 ring-opacity-50 lg:scale-105' 
                  : 'hover:shadow-2xl'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center py-3 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${tier.popular ? 'pt-16' : 'pt-8'}`}>
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    tier.popular 
                      ? 'bg-gradient-to-br from-primary-500 to-secondary-500' 
                      : 'bg-gray-100'
                  }`}>
                    <tier.icon className={`w-8 h-8 ${tier.popular ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">${tier.price}</span>
                    <span className="text-gray-600 ml-2">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
                  }`}
                >
                  {tier.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            All packages include professional editing, high-resolution files, and online gallery access
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent-500 rounded-full mr-2"></div>
              No hidden fees
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent-500 rounded-full mr-2"></div>
              Custom packages available
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent-500 rounded-full mr-2"></div>
              Travel expenses separate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}