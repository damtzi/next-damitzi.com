import { Suspense, unstable_ViewTransition as ViewTransition } from "react";
import { StravaActivity } from "@/components/strava-activity";
import { SkeletonStravaActivity } from "@/components/skeletons/skeleton-strava-activity";
import { SkeletonDiscogsActivity } from "@/components/skeletons/skeleton-discogs-activity";
import { DiscogsActivity } from "@/components/discogs-activity";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col">
                <ViewTransition name="page-header">
                    <h2 className="text-2xl font-serif font-medium">
                        About me
                    </h2>
                </ViewTransition>

                <p>
                    I work as a frontend engineer at{" "}
                    <Link
                        href="https://secretarium.com"
                        className="text-gray-400 transition-colors duration-150 ease-out hover:text-pure-blue hover:cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Secretarium
                    </Link>
                    . I specialise in building and maintaining user interfaces
                    for websites and web applications. In my spare time I&apos;m
                    watching the NBA, listening to{" "}
                    <Link
                        href="/music"
                        className="text-gray-400 transition-colors duration-150 ease-out hover:text-pure-blue hover:cursor-pointer"
                    >
                        music
                    </Link>
                    , and baking{" "}
                    <Link
                        href="/bread"
                        className="text-gray-400 transition-colors duration-150 ease-out hover:text-pure-blue hover:cursor-pointer"
                    >
                        bread
                    </Link>
                    .
                </p>
            </div>
            <Suspense fallback={<SkeletonStravaActivity/>}>
                <StravaActivity />
            </Suspense>
            <Suspense fallback={<SkeletonDiscogsActivity quantity={4} />}>
                <DiscogsActivity />
            </Suspense>
            <div className="flex flex-col">
                <h2 className="text-2xl font-serif font-medium">Connect</h2>
                <p>
                    You can follow me on{" "}
                    <Link
                        href="https://bsky.app/profile/damitzi.com"
                        className="text-gray-400 transition-colors duration-150 ease-out hover:text-pure-blue hover:cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Bluesky
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="https://www.instagram.com/damitzi__"
                        className="text-gray-400 transition-colors duration-150 ease-out hover:text-pure-blue hover:cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </Link>
                    , view my work on{" "}
                    <Link
                        href="https://github.com/damtzi"
                        className="text-gray-400 transition-colors duration-150 ease-out hover:text-pure-blue hover:cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </Link>
                    , see what I&apos;m listening to on{" "}
                    <Link
                        href="https://music.apple.com/profile/damitzi__"
                        className="text-gray-400 transition-colors duration-150 ease-out hover:text-pure-blue hover:cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Apple Music
                    </Link>
                    , or email me at{" "}
                    <Link
                        href="mailto:damian.tziamtzis@gmail.com"
                        className="text-gray-400 transition-colors duration-150 ease-out hover:text-pure-blue hover:cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        damian.tziamtzis@gmail.com
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
}
