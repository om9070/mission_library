// app/loading.tsx (for Next.js 13+ App Router)

export default function Loading() {
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-yellow-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-yellow-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Loading...
        </h2>
        <p className="text-gray-600">
          Please wait while we fetch your content
        </p>
      </div>
    </div>
  );
}