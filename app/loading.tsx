export default function Loading() {
  return (
    <div className="flex">
      {/* Sidebar Skeleton */}
      <aside className="w-64 bg-gray-900 min-h-screen p-6 sticky top-16 hidden lg:block">
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-4 bg-gray-800 rounded w-24 animate-pulse" />
              <div className="space-y-2">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="h-3 bg-gray-800 rounded w-32 animate-pulse" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content Skeleton */}
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Skeleton */}
          <div className="mb-8">
            <div className="h-10 bg-gray-800 rounded w-64 mb-2 animate-pulse" />
            <div className="h-4 bg-gray-800 rounded w-48 animate-pulse" />
          </div>

          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-700" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-700 rounded w-3/4" />
                  <div className="h-3 bg-gray-700 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
