import { Suspense } from "react";
import { DiscogVinyls } from "@/components/discog-vinyls";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function VinylsPage() {
    return (
        <div className="flex flex-col gap-8">
            <ViewTransition name="concerts-page-header">
                <h2 className="text-2xl font-serif font-medium">Vinyl collection</h2>
            </ViewTransition>
            <Suspense fallback={<div>Loading...</div>}>
                <DiscogVinyls />
            </Suspense>
        </div>
    );
}
