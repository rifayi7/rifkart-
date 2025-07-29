const colors = [
  { name: "White", bg: "bg-gray-200", ring: "ring-gray-300", count: 4 },
  { name: "Gray", bg: "bg-gray-400", ring: "ring-gray-300", count: 8 },
  { name: "Beige", bg: "bg-amber-100", ring: "ring-amber-300", count: 2 },
  { name: "Yellow", bg: "bg-yellow-300", ring: "ring-yellow-400", count: 7 },
  { name: "Orange", bg: "bg-orange-400", ring: "ring-orange-500", count: 3 },
  { name: "Red", bg: "bg-rose-400", ring: "ring-rose-500", count: 6 },
  { name: "Purple", bg: "bg-purple-300", ring: "ring-purple-400", count: 1 },
];

export default function FilterByColour() {
  return (
    <div className="flex flex-col gap-3 text-gray-600 font-light">
      <h1 className="font-bold text-black">Filter by colour</h1>
      {colors.map((color, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between gap-3 group"
        >
          {/* Left: color circle and name */}
          <div className="flex items-center gap-3 group-hover:text-amber-300">
            <div
              className={`w-4 h-4 rounded-full ring-2 ring-gray-200 p-[2px] group-hover:ring-gray-600`}
            >
              <div className={`w-full h-full rounded-full ${color.bg}`}></div>
            </div>
            <span>{color.name}</span>
          </div>

          {/* Right: number */}
          <span className="text-sm border min-w-7 text-center rounded-full text-gray-400 group-hover:text-white group-hover:bg-amber-300">
            {color.count}
          </span>
        </div>
      ))}
    </div>
  );
}
