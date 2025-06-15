export default function SearchInput({ onSearchChange }) {
  return (
    <div className="mt-10 relative max-w-md mx-auto group">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full border border-gray-300 rounded-xl py-2 pl-10 pr-4 
                   focus:outline-none focus:ring-1 focus:ring-amber-400
                   group-hover:border-amber-400 group-hover:shadow-md transition-all duration-300"
      />
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 
                   text-gray-400 group-hover:text-amber-500 transition-all duration-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="20"
        height="20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z"
        />
      </svg>
    </div>
  );
}
