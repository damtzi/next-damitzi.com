import { SkeletonRunCard } from "./skeleton-run-card";

export const SkeletonStravaActivity: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-serif font-medium">
            Recent runs
        </h2>
      {/* Grid of 4 skeleton RunCards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <SkeletonRunCard key={i} />
        ))}
      </div>
    </div>
  );
};
