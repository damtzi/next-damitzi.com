import type { Activity, StravaAuthResponse } from "@/lib/types";
import { RunCard } from "@/components/run-card";

export const StravaActivity = async () => {
    const stravaAuthResponse = await fetch(
        `https://www.strava.com/oauth/token?client_id=${process.env.STRAVA_CLIENT_ID}&client_secret=${process.env.STRAVA_CLIENT_SECRET}&refresh_token=${process.env.STRAVA_REFRESH_TOKEN}&grant_type=refresh_token`,
        {
            method: "POST",
        },
    );
    const data: StravaAuthResponse = await stravaAuthResponse.json();

    const stravaActivityResponse = await fetch(
        `https://www.strava.com/api/v3/athlete/activities?access_token=${data.access_token}`,
    );

    const stravaActivities: Activity[] = await stravaActivityResponse.json();
    console.log(stravaActivities);
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-serif font-medium">
                Recent runs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stravaActivities
                    .filter((activity) => activity.type === "Run")
                    .splice(0, 4)
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
