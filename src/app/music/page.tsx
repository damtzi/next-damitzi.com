import { unstable_ViewTransition as ViewTransition } from "react";

export default function MusicPage() {
    return (
        <div className="flex flex-col gap-2">
            <ViewTransition name="page-header">
                <h2 className="text-2xl font-serif font-medium">Music</h2>
            </ViewTransition>
        </div>
    );
}
