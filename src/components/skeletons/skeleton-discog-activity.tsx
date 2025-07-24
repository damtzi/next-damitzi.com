import { SkeletonVinylRecord } from "./skeleton-vinyl-record";

export const SkeletonDiscogActivity: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-serif font-medium">
            Recent vinyl pickups
        </h2>
      {/* Grid of 4 skeleton RunCards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {[...Array(4)].map((_, i) => (
          <SkeletonVinylRecord key={i} />
        ))}
      </div>
    </div>
  );
};
