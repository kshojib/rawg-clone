export default function NewLoading() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Skeleton */}
      <aside className="w-56 bg-[#151516] min-h-screen pt-6 pb-8 px-0 sticky top-14 overflow-y-auto hidden lg:block border-r border-gray-800/30">
        <div className="space-y-8 px-5">
          <div className="h-4 bg-gray-800 rounded w-24 animate-pulse"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-3 bg-gray-800 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content Skeleton */}
      <main className="flex-1 px-6 py-10 lg:px-12 lg:py-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Header Skeleton */}
          <div className="mb-10">
            <div className="h-12 bg-gray-800 rounded w-96 mb-3 animate-pulse"></div>
            <div className="h-4 bg-gray-800 rounded w-64 animate-pulse"></div>
          </div>

          {/* Games Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="bg-[#202020] rounded-2xl overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-gray-800"></div>
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
