export const SkeletonRunCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 border border-gray-300 shadow rounded-md px-4 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse">
      {/* Date placeholder */}
      <div className="h-5 w-1/3 bg-gray-300 dark:bg-gray-700 rounded"></div>

      {/* Grid with 3 columns placeholders */}
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col space-y-1">
          <div className="h-3 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-20 bg-gray-400 dark:bg-gray-600 rounded"></div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="h-3 w-12 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-20 bg-gray-400 dark:bg-gray-600 rounded"></div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="h-3 w-14 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-20 bg-gray-400 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
    </div>
  );
};
