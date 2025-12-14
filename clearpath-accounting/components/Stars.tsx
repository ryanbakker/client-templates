export function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-teal-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M10 2.5l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 14.77l-4.78 2.51.91-5.32L2.27 8.12l5.34-.78L10 2.5z" />
        </svg>
      ))}
    </div>
  );
}
