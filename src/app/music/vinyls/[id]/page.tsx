import { unstable_ViewTransition as ViewTransition } from 'react';
import Image from 'next/image';
import Vinyls from '../../../../../public/vinyls/collection.json';
import { slugify } from '@/lib/utils';

export async function generateStaticParams() {
    return Vinyls.map((vinyl) => ({
        id: slugify(vinyl.title)
    }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const vinyl = Vinyls.find((vinyl) => slugify(vinyl.title) === id);

    if (!vinyl) {
        return <div>Vinyl not found</div>;
    }

    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-serif font-medium">
                {vinyl.title}
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
                <ViewTransition name={`vinyl-${slugify(id)}`}>
                    <Image
                        src={vinyl.coverImage}
                        alt={`Vinyl cover for ${vinyl.title}`}
                        width={400}
                        height={400}
                        className="rounded-xs shadow-lg"
                    />
                </ViewTransition>
                <div className="flex flex-col gap-4">

                </div>
            </div>
        </div>
    );
}
