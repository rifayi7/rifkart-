export default function FilterByPrice() {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="font-bold text-lg mb-4">Filter by price</h2>

      <div className="relative mb-4 h-8">
        <input
          type="range"
          min="0"
          max="100"
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto z-10"
        />
        <input
          type="range"
          min="0"
          max="100"
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto z-10"
        />
        <div className="h-2 bg-yellow-400 rounded-full absolute top-1/2 -translate-y-1/2 w-full z-0"></div>
      </div>

      <p className="text-gray-600 font-medium">
        Price: <span className="text-black font-bold">$15</span> -
        <span className="text-black font-bold">$50</span>
      </p>
    </div>
  );
}
