import ScootyCard from '../../../components/ScootyCard';

const scooties = [
  {
    id: '1',
    model: 'Honda Activa 125',
    price: 250,
    image: '/honda-activa-125.jpeg',
    description: 'Comfortable and fuel-efficient scooter perfect for city rides and hill station explorations.'
  },
  {
    id: '2',
    model: 'TVS Jupiter',
    price: 220,
    image: '/tvs-jupiter-pic-20.webp',
    description: 'Stylish scooter with excellent mileage and smooth ride quality for scenic journeys.'
  },
  {
    id: '3',
    model: 'Suzuki Access 125',
    price: 280,
    image: '/access.webp',
    description: 'Premium scooter with advanced features and superior comfort for long rides.'
  },
  {
    id: '4',
    model: 'Yamaha Fascino',
    price: 240,
    image: '/fascino.webp',
    description: 'Elegant design with powerful engine, ideal for both urban and rural adventures.'
  },
  {
    id: '5',
    model: 'TVS Ntorq',
    price: 200,
    image: '/tvs-ntorq-125-right-side-view0.webp',
    description: 'Reliable and economical scooter perfect for budget-conscious travelers.'
  },
  {
    id: '6',
    model: 'Hero Destiny',
    price: 300,
    image: '/destiny.jpeg',
    description: 'Electric scooter with zero emissions, perfect for eco-friendly hill station tours.'
  }
];

export default function Fleet() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Scooty Fleet</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose from our premium collection of scooters, each maintained to the highest standards for your safety and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scooties.map((scooty) => (
            <ScootyCard
              key={scooty.id}
              id={scooty.id}
              model={scooty.model}
              price={scooty.price}
              image={scooty.image}
              description={scooty.description}
            />
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Why Choose Our Fleet?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Well Maintained</h3>
              <p className="text-gray-600 dark:text-gray-400">All scooters are regularly serviced and inspected for your safety.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fuel Efficient</h3>
              <p className="text-gray-600 dark:text-gray-400">Latest models with excellent mileage to save on fuel costs.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-400">Round-the-clock assistance for any issues during your rental.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
