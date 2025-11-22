export function CardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse p-4">
      <div className="bg-gray-200 h-48 w-full"></div>
      <div className="mt-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
}

export function GridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-8">
      {Array.from({ length: count }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}

export function DetailSkeleton() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-pulse">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-gray-200 w-full md:w-64 h-64 rounded-lg"></div>
        <div className="flex-1">
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 rounded w-full"></div>
            <div className="h-6 bg-gray-200 rounded w-full"></div>
            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
