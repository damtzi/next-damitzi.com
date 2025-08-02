import { SkeletonVinylRecord } from "./skeleton-vinyl-record";

export const SkeletonDiscogsActivity = ({ quantity }: { quantity: number }) => {
  return (
    <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-serif font-medium">
            Recent pickups
        </h2>
      {/* Grid of 4 skeleton RunCards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {[...Array(quantity)].map((_, i) => (
          <SkeletonVinylRecord key={i} />
        ))}
      </div>
    </div>
  );
};
