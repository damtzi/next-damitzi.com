import { unstable_ViewTransition as ViewTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VinylPng from '../../public/images/black-vinyl.png';
import CdPng from '../../public/images/clear-cd.png';
import { getDiscogsCollection } from '@/lib/discogs';

export const DiscogsVinyls = async () => {
    const vinyls = await getDiscogsCollection();

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {vinyls.releases.map((release) => (
                <Link href={`/music/vinyls/${release.id}`} className="relative group" key={release.id}>
                    <ViewTransition name={`vinyl_${release.id}`}>
                        <Image
                            src={release.basic_information.cover_image}
                            alt={release.basic_information.title}
                            width={200}
                            height={200}
                            className="hover:scale-105 transition-transform duration-300 rounded-xs relative z-10 aspect-square"
                        />
                    </ViewTransition>
                    <Image
                        src={release.basic_information.formats.map(format => format.name).find(name => name === 'Vinyl') ? VinylPng : CdPng}
                        alt={release.basic_information.formats.map(format => format.name).find(name => name === 'Vinyl') ? 'A black vinyl record' : 'A clear CD'}
                        width={200}
                        height={200}
                        className="absolute top-0 group-hover:translate-x-10 transition-transform duration-300 z-0"
                    />
                </Link>
            ))}
        </div>
    )
}
