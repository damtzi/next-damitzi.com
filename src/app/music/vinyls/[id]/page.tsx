import { unstable_ViewTransition as ViewTransition } from 'react';
import type { CollectionsResponse, DiscogsRelease } from '@/lib/types';
import Image from 'next/image';
import VinylPng from '../../../../../public/images/black-vinyl.png';

export async function generateStaticParams() {
    const vinyls: CollectionsResponse = await fetch(
        `https://api.discogs.com/users/damitzi__/collection/folders/0/releases?token=${process.env.DISCOGS_TOKEN}&per_page=100&sort=artist`
    ).then((res) => res.json());

    return vinyls.releases.map((release) => ({
        id: release.id.toString(),
    }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const vinyl: DiscogsRelease = await fetch(
        `https://api.discogs.com/releases/${id}?token=${process.env.DISCOGS_TOKEN}`
    ).then((res) => res.json());
    const primaryImage = vinyl.images.find((image) => image.type === 'primary');
    console.log('page', `vinyl_${id}`)
    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-serif font-medium">
                {vinyl.title}
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
                <ViewTransition name={`vinyl_${id}`}>
                    <Image
                        src={primaryImage?.uri || VinylPng}
                        alt={`Vinyl cover for ${vinyl.title}`}
                        width={400}
                        height={400}
                        className="rounded-xs"
                    />
                </ViewTransition>
                <div className="flex flex-col gap-4">

                </div>
            </div>
        </div>
    );
}
