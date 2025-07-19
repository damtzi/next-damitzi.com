import { Suspense } from "react";
import { DiscogVinyls } from "@/components/discog-vinyls";

export default function VinylsPage() {
    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-serif font-medium">Vinyls</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <DiscogVinyls />
            </Suspense>
        </div>
    );
}
