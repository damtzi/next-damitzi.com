export type StravaAuthResponse = {
    token_type: string;
    access_token: string;
    expires_at: number;
    expires_in: number;
    refresh_token: string;
};

export type Athlete = {
    id: number;
    resource_state: number;
};

export type Map = {
    id: string;
    summary_polyline: string;
    resource_state: number;
};

export type Activity = {
    private: boolean;
    manual: boolean;
    commute: boolean;
    location_city: string | null;
    kudos_count: number;
    id: number;
    gear_id: string | null;
    pr_count: number;
    sport_type: string;
    moving_time: number;
    location_country: string | null;
    has_heartrate: boolean;
    display_hide_heartrate_option: boolean;
    total_photo_count: number;
    external_id: string;
    athlete: Athlete;
    type: string;
    achievement_count: number;
    average_cadence?: number;
    max_heartrate: number;
    athlete_count: number;
    average_speed: number;
    upload_id: number;
    elev_low: number;
    elapsed_time: number;
    trainer: boolean;
    upload_id_str: string;
    distance: number;
    start_latlng: number[];
    resource_state: number;
    name: string;
    average_heartrate: number;
    heartrate_opt_out: boolean;
    comment_count: number;
    has_kudoed: boolean;
    start_date: string;
    start_date_local: string;
    map: Map;
    max_speed: number;
    location_state: string | null;
    total_elevation_gain: number;
    flagged: boolean;
    visibility: string;
    photo_count: number;
    elev_high: number;
    end_latlng: number[];
    utc_offset: number;
    from_accepted_tag: boolean;
    workout_type?: string | null;
    timezone: string;
};
