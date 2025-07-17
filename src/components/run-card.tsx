import { formatTime } from "@/lib/utils";

type RunCardProps = {
    date: string;
    distance: number; // meters
    movingTime: number; // seconds
};

export const RunCard = ({ date, distance, movingTime }: RunCardProps) => {
    // Convert distance to km
    const distanceKm = distance / 1000;

    // Calculate pace in seconds per km
    const paceSecondsPerKm = movingTime / distanceKm;

    // Calculate minutes and seconds for pace
    const paceMinutes = Math.floor(paceSecondsPerKm / 60);
    const paceSeconds = Math.round(paceSecondsPerKm % 60);

    // Format seconds with leading zero if needed
    const formattedSeconds = paceSeconds < 10 ? `0${paceSeconds}` : paceSeconds;

    // Format date to "12 May 2025"
    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return (
        <div className="flex flex-col gap-2 border border-gray-300 shadow rounded-md px-4 py-2">
            <h3>{formattedDate}</h3>
            <div className="grid grid-cols-3">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Distance</span>
                    <span className="font-mono">
                        {(distance / 1000).toFixed(2)} km
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Pace</span>
                    <span className="font-mono">
                        {paceMinutes}:{formattedSeconds} /km
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Duration</span>
                    <span className="font-mono">
                        {formatTime(movingTime)} mm:ss
                    </span>
                </div>
            </div>
        </div>
    );
};
