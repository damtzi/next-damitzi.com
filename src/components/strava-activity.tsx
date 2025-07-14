import type { Activity, StravaAuthResponse } from "@/lib/types";

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

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-serif font-medium">Recent activity</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stravaActivities.splice(0, 4).map((activity) => (
                    <div key={activity.id} className="flex flex-col gap-2 border border-black rounded-md px-4 py-2">
                        <h3>{activity.name}</h3>
                        <p>{activity.distance} meters</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
