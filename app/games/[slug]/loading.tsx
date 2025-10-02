export default function GameLoading() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Back Button Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="h-5 bg-gray-800 rounded w-32 animate-pulse" />
      </div>

      {/* Hero Skeleton */}
      <div className="h-96 bg-gray-900 animate-pulse" />

      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="h-8 bg-gray-800 rounded w-32 animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-800 rounded animate-pulse" />
                <div className="h-4 bg-gray-800 rounded animate-pulse" />
                <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-900 rounded-lg p-6">
                <div className="h-6 bg-gray-800 rounded w-24 mb-3 animate-pulse" />
                <div className="h-4 bg-gray-800 rounded w-32 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
