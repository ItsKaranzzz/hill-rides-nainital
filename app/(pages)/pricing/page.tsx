const pricingPlans = [
  {
    name: 'Basic',
    duration: '1 Day',
    price: 250,
    features: [
      'Single scooter rental',
      'Basic insurance coverage',
      '24/7 roadside assistance',
      'Fuel included (up to 100km)',
      'Helmet provided'
    ],
    popular: false
  },
  {
    name: 'Standard',
    duration: '3 Days',
    price: 650,
    features: [
      'Single scooter rental',
      'Comprehensive insurance',
      '24/7 roadside assistance',
      'Fuel included (up to 300km)',
      'Helmet & lock provided',
      'Free pickup from station'
    ],
    popular: true
  },
  {
    name: 'Premium',
    duration: '7 Days',
    price: 1400,
    features: [
      'Single scooter rental',
      'Full insurance coverage',
      '24/7 roadside assistance',
      'Unlimited fuel',
      'Premium accessories included',
      'Free airport pickup',
      'Priority booking'
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Transparent Pricing</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your adventure. All prices include taxes and insurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-1">₹{plan.price}</div>
                <div className="text-gray-600 dark:text-gray-400 mb-6">{plan.duration}</div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`block w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
                >
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-secondary/10 dark:bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10a2 2 0 002 2h4a2 2 0 002-2V11M9 11h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Extra Day</h3>
              <p className="text-gray-600 dark:text-gray-400">₹200 per additional day</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 dark:bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Tour Guide</h3>
              <p className="text-gray-600 dark:text-gray-400">₹500 per day</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 dark:bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone Rental</h3>
              <p className="text-gray-600 dark:text-gray-400">₹100 per day</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 dark:bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GPS Navigation</h3>
              <p className="text-gray-600 dark:text-gray-400">₹150 per day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
