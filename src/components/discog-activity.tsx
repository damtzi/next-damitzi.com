import type { CollectionsResponse } from '@/lib/types';
import Image from 'next/image';
import VinylPng from '../../public/images/black-vinyl.png';

export const DiscogActivity = async () => {
    const discogsCollection = await fetch(
        `https://api.discogs.com/users/damitzi__/collection/folders/0/releases?token=${process.env.DISCOGS_TOKEN}&per_page=100&sort=artist`
    );

    const vinyls: CollectionsResponse = await discogsCollection.json();

    // Sort by date_added in descending order (most recent first) and take the first 4
    const recentVinyls = vinyls.releases
        .sort((a, b) => new Date(b.date_added).getTime() - new Date(a.date_added).getTime())
        .slice(0, 4);

    return (
    <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-serif font-medium">
            Recent vinyl pickups
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {recentVinyls.map((release) => (
                <div className="relative group" key={release.id}>
                    <Image
                        src={release.basic_information.cover_image}
                        alt={release.basic_information.title}
                        width={200}
                        height={200}
                        className="hover:scale-105 transition-transform duration-300 rounded-xs relative z-10 aspect-square"
                    />
                    <Image
                        src={VinylPng}
                        alt="Vinyl record"
                        width={200}
                        height={200}
                        className="absolute top-0 group-hover:translate-x-10 transition-transform duration-300 z-0"
                    />
                </div>
            ))}
        </div>
    </div>
    );
};
