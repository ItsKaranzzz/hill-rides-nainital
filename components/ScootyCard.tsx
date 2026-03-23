interface ScootyCardProps {
  id: string;
  model: string;
  price: number;
  image: string;
  description: string;
}

export default function ScootyCard({ model, price, image, description }: ScootyCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
        <img
          src={image}
          alt={model}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
          ₹{price}/day
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{model}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

        <a href="/contact" className="block w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
          Book Now
        </a>
      </div>
    </div>
  );
}
