import { unstable_ViewTransition as ViewTransition } from 'react';
import Image from 'next/image';
import { getDiscogsCollection, getVinylDetails } from '@/lib/discogs';
import VinylPng from '../../../../../public/images/black-vinyl.png';

export async function generateStaticParams() {
    const vinyls = await getDiscogsCollection();
    
    return vinyls.releases.map((vinyl) => ({
        id: vinyl.id.toString()
    }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const vinyl = await getVinylDetails(id);

    if (!vinyl) {
        return <div>Vinyl not found</div>;
    }

    const primaryImage = vinyl.images.find((image) => image.type === 'primary');
    const secondaryImage = vinyl.images.find((image) => image.type === 'secondary');
    
    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-serif font-medium">
                {vinyl.title}
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
                <ViewTransition name={`vinyl-${id}`}>
                    <Image
                        src={primaryImage?.uri || secondaryImage?.uri || VinylPng}
                        alt={`Vinyl cover for ${vinyl.title}`}
                        width={400}
                        height={400}
                        className="rounded-xs shadow-lg"
                    />
                </ViewTransition>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Album</span>
                        <span>
                            {vinyl.title}
                        </span>
                    </div>
                    
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Artist</span>
                        <span>
                            {vinyl.artists.map(artist => artist.name).join(', ')}
                        </span>
                    </div>
                    
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Label</span>
                        <span>
                            {vinyl.labels.map(label => label.name).join(', ')}
                        </span>
                    </div>
                    
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Format</span>
                        <span>
                            {vinyl.formats.map(format => format.name).join(', ')}
                        </span>
                    </div>
                    
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Genres</span>
                        <span>
                            {vinyl.genres.join(', ')}
                        </span>
                    </div>
                    
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Released</span>
                        <span>
                            {vinyl.released}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
