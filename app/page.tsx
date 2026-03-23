export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-screen relative">
        <img src="/hero-bg.jpg?v=1" alt="Hero background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/20 dark:bg-black/50 z-0 transition-colors duration-300" />
        <section className="relative h-screen flex items-start justify-center pt-32 z-10">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-lg">
              Hill Rides Nainital
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto drop-shadow-md">
              Bike &amp; Scooty Rentals – Explore the Hills Your Way
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/fleet" className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg text-center">
                Book a Bike with Rider
              </a>
              <a href="/fleet" className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg text-center">
                Rent a Bike or Scooty (Self-Drive)
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-950 py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">Why Choose Hill Rides?</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Your trusted partner for exploring Nainital&apos;s breathtaking landscapes on two wheels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transition-colors duration-300">
              <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Affordable Rates</h3>
              <p className="text-gray-600 dark:text-gray-400">Starting from just ₹200/day with transparent pricing and no hidden fees.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transition-colors duration-300">
              <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Well Maintained Fleet</h3>
              <p className="text-gray-600 dark:text-gray-400">All scooters regularly serviced and inspected for your safety and comfort.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transition-colors duration-300">
              <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-400">Round-the-clock roadside assistance so you can ride worry-free.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
