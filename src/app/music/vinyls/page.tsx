import { unstable_ViewTransition as ViewTransition } from "react";
import { Suspense } from "react";
import { DiscogsVinyls } from "@/components/discogs-vinyls";
import { SkeletonDiscogsActivity } from "@/components/skeletons/skeleton-discogs-activity";

export default function VinylsPage() {
    return (
        <div className="flex flex-col gap-8">
            <ViewTransition name="vinyls-page-header">
                <h2 className="text-2xl font-serif font-medium">Vinyl collection</h2>
            </ViewTransition>
            <Suspense fallback={<SkeletonDiscogsActivity quantity={16} />}>
                <DiscogsVinyls />
            </Suspense>
        </div>
    );
}
