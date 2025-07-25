import { RunCard } from "@/components/run-card";
import { getStravaActivity } from "@/lib/strava";

export const StravaActivity = async () => {
    const stravaActivities = await getStravaActivity();

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-serif font-medium">
                Recent runs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stravaActivities
                    .filter((activity) => activity.type === "Run")
                    .slice(0, 4)
                    .map((activity) => (
                        <RunCard
                            key={activity.id}
                            date={activity.start_date_local}
                            distance={activity.distance}
                            movingTime={activity.moving_time}
                        />
                    ))}
            </div>
        </div>
    );
};
